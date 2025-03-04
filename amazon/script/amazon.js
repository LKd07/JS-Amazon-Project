let productHTML= '';
products.forEach((product)=>{
  productHTML += `
   <div class="product-container">
      <div class="product-image-container">
        <img  class="product-image" src=${product.image}>
      </div>
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
      <div class="product-rating-container">
        <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count">
          ${product.rating.count}
        </div>
      </div>
      
      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `
});

document.querySelector('.js-products-grid').innerHTML = productHTML;

let cartQuantity=0;
document.querySelectorAll('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click',()=>{
    let productId=button.dataset.productId;
    let flag=1;
    cart.forEach((product)=>{
      if(product.productId===productId){
        flag=0;
        product.quantity++;
      }
    });
    if(flag){
    cart.push({
      productId: productId,
      quantity:1
    });
  }
  cartQuantity++;
  document.querySelector('.js-cart-quantity')
  .innerHTML=cartQuantity;
  console.log(cart);
  });
});

