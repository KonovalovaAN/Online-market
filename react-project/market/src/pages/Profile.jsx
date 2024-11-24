import React, { useEffect } from 'react';

function Profile() {
  useEffect(() => {
    document.title = "Профиль"; 
  }, []);
  return (

      <div>
    <section>
        <div class="container">
            {/* Каталог и корзина с фиксированным расположением на странице */}
            <div class="row mt-1 position-fixed z-3">
                {/* Каталог */}
                <div class="dropdown mb-2">
                    <button class="btn btn-secondary dropdown-toggle btn-dark" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Каталог
                        <img class="mx-1" src="../deps/icons/grid-fill.svg" alt="Catalog Icon" width="16"
                            height="16"/>
                    </button>
                    <ul class="dropdown-menu bg-dark" data-bs-theme="dark">
                        <li><a class="dropdown-item text-white" href="/catalog">Все товары</a></li>
                        <li><a class="dropdown-item text-white" href="/catalog">Ноутбуки</a></li>
                        <li><a class="dropdown-item text-white" href="/catalog">Планшеты</a></li>
                        <li><a class="dropdown-item text-white" href="/catalog">Смартфона</a></li>
                        <li><a class="dropdown-item text-white" href="/catalog">Компьютеры</a></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Контент */}
        <div class="container">
            <div class="row mt-1">
                <div class="col-lg-2">
                    {/* Пустой блок на усмотрение */}
                </div>
                <div class="col-lg-10">
                    {/* Контент на странице */}
                    <div class="row">
                        <div class="container mt-5">
                            <div class="row">
                                {/* Профиль с данными пользователя */}
                                <div class="col-md-5">
                                    <div class=" bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                                        <h3 class="text-center mb-4">Профиль пользователя</h3>
                                        <form>
                                            <div class="row">
                                                <div class="col-md-12 mb-3 text-center">
                                                <img
                                                    src="../deps/images/baseavatar.jpg"
                                                    alt="Аватар пользователя"
                                                    className="img-fluid rounded-circle"
                                                    style={{ maxWidth: '150px' }}
                                                />  
                                                    <input type="file" class="form-control mt-3" id="avatar"
                                                        accept="image/*"/>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="firstName" class="form-label">Имя*</label>
                                                    <input type="text" class="form-control" id="firstName"
                                                        placeholder="Введите ваше имя" value="" required/>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="lastName" class="form-label">Фамилия*</label>
                                                    <input type="text" class="form-control" id="lastName"
                                                        placeholder="Введите вашу фамилию" value="" required/>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="username" class="form-label">Имя пользователя*</label>
                                                    <input type="text" class="form-control" id="username"
                                                        placeholder="Введите ваше имя пользователя" value="" required/>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label for="email" class="form-label">Email*</label>
                                                    <input type="email" class="form-control" id="email"
                                                        placeholder="Введите ваш email *youremail@example.com" value=""
                                                        required/>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-dark">Сохранить</button>
                                        </form>
                                    </div>
                                </div>
                                {/* Корзина */}
                                <div class="col-md-7">
                                    <div class=" bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                                        <h3 class="text-center mb-4">Корзина</h3>
                                        <div class="container" id="cart-items-container">
                                            {/* Разметка корзины */}
                                            <div class="card mb-3 text-bg-light shadow-lg">
                                                <div class="card-header">
                                                    <h5 class="card-title">Товар</h5>
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <div class="row text-center">
                                                            <div class="col p-0">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-dark btn-sm decrement"
                                                                            data-cart-id="" data-cart-change-url="">-</button>
                                                                    </span>
                                                                    <input type="text" class="form-control number" value="1"
                                                                        readOnly/>
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-dark btn-sm increment"
                                                                            data-cart-id="" data-cart-change-url="">+</button>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div class="col p-0">
                                                                <a href="#" class="remove-from-cart" data-cart-id="">
                                                                    <img class="mx-1" src="../deps/icons/trash3-fill.svg"
                                                                        alt="Catalog Icon" width="16" height="16"/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="card mb-3 shadow-lg">
                                                <div class="card-footer">
                                                    <p class="float-left">Итого <strong>1</strong> товар(а) на сумму</p>
                                                </div>
                                            </div>
                                            <a class="btn btn-dark" href="/create_order">
                                                Оформить заказ
                                            </a>
                                            {/* Закончилась разметка корзины */}
                                        </div>
                                    </div>
                                </div>
                                {/* Оформленные заказы */}
                                <div class="col-md-12">
                                    <div class=" bg-white p-4 mb-4 mx-2 rounded custom-shadow">
                                        <h3 class="text-center mb-4">Мои заказы</h3>
                                                <div class="accordion-item">
                                                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                        <div class="accordion-div">
                                                            <table class="table table-dark table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Товар</th>
                                                                        <th>Количество</th>
                                                                        <th>Цена</th>
                                                                        <th>Общая стоимость</th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Закончилась разметка заказов */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <div style={{ padding: '35px', borderRadius: '15px' }}></div>
      </div>
  )
}

export default Profile