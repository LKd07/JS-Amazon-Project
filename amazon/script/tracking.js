import { orders } from "../data/orders.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getProduct } from "../data/products.js";

function tracking(){
  let trackingHTML;
  let matchingOrder;
  let matchingProduct;
  let productInOrder;
  const url=new URL(window.location.href);
  let orderId=url.searchParams.get('orderId');
  let productId=url.searchParams.get('productId');
  orders.forEach((order)=>{
    if(order.id===orderId){
      matchingOrder=order;
    }
  });
  matchingProduct=getProduct(productId);
  matchingOrder.products.forEach((product)=>{
    if(product.productId==matchingProduct.id){
      productInOrder=product;
    }
  });
  const deliveryTime = dayjs(matchingOrder.estimatedDeliveryTime).format('MMMM D');

  trackingHTML=`
  <a class="back-to-orders-link link-primary" href="orders.html">
    View all orders
  </a>
  <div class="delivery-date">
    Arriving on ${deliveryTime}
  </div>

  <div class="product-info">
    ${matchingProduct.name}
  </div>

  <div class="product-info">
    Quantity: ${productInOrder.quantity}
  </div>

  <img class="product-image" src="${matchingProduct.image}">

<div class="progress-labels-container">
  <div class="progress-label">
    Preparing
  </div>
  <div class="progress-label current-status">
    Shipped
  </div>
  <div class="progress-label">
    Delivered
  </div>
</div>

<div class="progress-bar-container">
  <div class="progress-bar"></div>
</div>
  `
document.querySelector('.js-order-tracking').innerHTML=trackingHTML;
}
tracking();