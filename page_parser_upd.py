import requests
from bs4 import BeautifulSoup
import json
import os

categories = {
    "https://5element.by/catalog/377-smartfony": "смартфоны",
    "https://5element.by/catalog/1383-noutbuki": "ноутбуки",
    "https://5element.by/catalog/281-sistemnye-bloki-kompyutery": "компьютеры",
    "https://5element.by/catalog/293-planshety": "планшеты",
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
}

for folder in categories.values():
    os.makedirs(folder, exist_ok=True)

session = requests.Session()
session.headers.update(headers)

def save_image(image_url, folder, product_name):
    try:
        response = session.get(image_url, stream=True)
        response.raise_for_status()

        image_name = f"{product_name[:50].replace(' ', '_').replace('/', '_')}.jpg"
        image_path = os.path.join(folder, image_name)

        with open(image_path, "wb") as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)

        return image_name
    except Exception as e:
        print(f"Ошибка загрузки изображения {image_url}: {e}")
        return None

def parse_page(url, folder):
    try:
        response = session.get(url, allow_redirects=True)
        response.raise_for_status()
    except requests.exceptions.TooManyRedirects:
        print(f"Ошибка редиректа на странице {url}")
        return []

    soup = BeautifulSoup(response.text, "lxml")
    products = soup.find_all("div", class_="catalog-item")

    data = []

    for product in products:
        product_data = product.get("data-ec_product")
        if product_data:
            product_info = json.loads(product_data)
            name = product_info.get("name", "Не указано")
            price = product_info.get("price", "Не указано")
            image_url = product_info.get("image", None)

            image_file = save_image(image_url, folder, name) if image_url else None

            details_block = product.find("div", class_="c-details")
            if details_block:
                details_lines = details_block.find_all("span")
                description = "; ".join([line.text.strip() for line in details_lines])
            else:
                description = "Описание отсутствует"

            data.append({
                "image": image_file,
                "name": name,
                "description": description,
                "price": price,
            })
    return data

def parse_category(url, folder):
    page = 1
    all_data = []

    for i in range(5):
        print(f"Парсинг страницы {page} категории {folder}...")
        current_url = f"{url}?page={page}"
        page_data = parse_page(current_url, folder)

        if not page_data:
            break

        all_data.extend(page_data)
        page += 1

    output_file = os.path.join(folder, "data.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=4)

    print(f"Данные категории {folder} сохранены в: {output_file}")

for category_url, folder_name in categories.items():
    parse_category(category_url, folder_name)
