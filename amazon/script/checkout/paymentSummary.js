import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { cart } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";

export function paymentSummary(){
  let productPriceCents=0;
  let ShippingPriceCents=0;
  cart.forEach((cartItem)=>{
    let product=getProduct(cartItem.productId);
    let deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
    productPriceCents += product.priceCents * cartItem.quantity;
    
    ShippingPriceCents += deliveryOption.priceCents;
  });
  let totalBeforeTax=productPriceCents + ShippingPriceCents;
  let estimatedTax= totalBeforeTax * 0.1;
  let orderTotal = estimatedTax + totalBeforeTax; 

  let paymentSummaryHTML='';

  paymentSummaryHTML=`
    <div class="payment-summary-title">
      Order-Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(ShippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;

  
}