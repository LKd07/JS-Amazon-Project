export let cart= [
{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},
{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
}
];

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

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((product)=>{
    if(product.productId!==productId){
      newCart.push(product);
    }
  });
  cart=newCart;
}