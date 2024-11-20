$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:8000/',
    method: 'GET',
    success: function (data) {
      const productList = $('#product-list');
      data.forEach(product => {
        productList.append(`<li>${product.name} - $${product.price}</li>`);
      });
    },
    error: function (error) {
      console.error('Error fetching products:', error);
    }
  });
});
