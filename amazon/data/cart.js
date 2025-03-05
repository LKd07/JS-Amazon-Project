export const cart= [];

export function addToCart(productId, selectedQuantity){
  let flag=1;
  cart.forEach((product)=>{
    if(product.productId===productId){
      flag=0;
      product.quantity += selectedQuantity;
    }
  });
  if(flag){
  cart.push({
    //productId: productId,
    productId,
    quantity: selectedQuantity
  });
}
}