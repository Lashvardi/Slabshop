
let product_id = window.location.hash.split('#')[1];

fetch(`https://fakestoreapi.com/products/${product_id}`)
.then(function (response) {
  return response.json();
}).then(function (product) {
  let product_html = `<div class="col-lg-3">
    <div class="img-div">
      <img class="card-img-top" src="${product.image}" alt="Card image cap">
    </div>
  </div>
  <div class="col-lg-5">
    <div class="content">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">$${product.price}</p>
      <p class="card-text">${product.category}</p>
      <p class="card-text">${product.description}</p>
      <p class="card-text">Count: ${product.rating.count}</p>
    </div>
  </div>`;

  $('.product_about').append(product_html);
  document.title = product.title;
});
