document.title = window.location.href
let product_id = (window.location.hash.split('#')[1])
fetch(`https://fakestoreapi.com/products/${product_id}`)
.then(function (response) {
  return response.json();
}).then(function (Card_info) {
  let info_Card = `<div class="col-lg-3">
    <div class="img-div">
      <img class="card-img-top" src="${Card_info.image}" alt="Card image cap">
    </div>
  </div>
  <div class="col-lg-5">\
    <div class="content">
      <h5 class="card-title">${Card_info.title}</h5>
      <p class="card-text">$${Card_info.price}</p>
      <p class="card-text">${Card_info.category}</p>
      <p class="card-text">${Card_info.description}</p>
      <p class="card-text">Count: ${Card_info.rating.count}</p>
    </div>
  </div>`

  $('.container .row').append(info_Card);
  document.title = Card_info.title
})

fetch('https://fakestoreapi.com/products')
.then(function (response) {
  return response.json();
}).then(function (products) {
  let random_products = [];
  while (random_products.length < 4) {
    let index = Math.floor(Math.random() * products.length);
    let product = products[index];
    if (!random_products.includes(product)) {
      random_products.push(product);
    }
  }
  let similar_products_html = '';
  random_products.forEach(function (product) {
    let html = `<div class="col-lg-3">
      <a href="product.html#${product.id}">
        <div class="img-div">
          <img class="card-img-top" src="${product.image}" alt="Card image cap">
        </div>
        <div class="content">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">$${product.price}</p>
          <p class="card-text">${product.category}</p>
          <p class="card-text">${product.description}</p>
          <p class="card-text">Count: ${product.rating.count}</p>
        </div>
      </a>
    </div>`;
    similar_products_html += html;
  });
  $('.similar').html(`<h1>Similar Products</h1><div class="row">${similar_products_html}</div>`);
});

