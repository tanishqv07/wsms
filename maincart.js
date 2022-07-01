//custom js file
// below funtion is product details
let cart = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Mineral Water',
        tag: 'mineralwater',
        price: 2,
        inCart: 0
    },
    {
        name: 'Alkaline Water',
        tag: 'alkalinewater',
        price: 7,
        inCart: 0
    },
    {
        name: 'Mineral Water2',
        tag: 'mineralwater2',
        price: 1,
        inCart: 0
    },
    {
        name: 'Alkaline Water2',
        tag: 'alkalinewater2',
        price: 8,
        inCart: 0
    },

]

//for storing data
for(let i=0; i < cart.length; i++){
cart[i].addEventListener('click',() => {
 cartNumbers(products[i]);
 totalCost(products[i])
})
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// set values in local storage
function cartNumbers(products){
  
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
   if( productNumbers){
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1 ;
   }
   else{
    localStorage.setItem('cartNumbers',1)
    document.querySelector('.cart span').textContent = 1;
   }
   setItems(products);

}

//this the pesuodo Db
function setItems(products){
let CartItems = localStorage.getItem('productsinCart');
CartItems = JSON.parse(CartItems);

//check
if (CartItems != null) {

     if (CartItems[products.tag] == undefined) {
         CartItems = {
             ...CartItems,
             [products.tag]:products
         }
    }
    CartItems[products.tag].inCart +=1;
}
else{

    products.inCart = 1;
    CartItems = {
       [products.tag]:products
}

}
// give detail in localstore
   
    localStorage.setItem('productsinCart',JSON.stringify(CartItems))
}

function totalCost(products){
    //console.log("the product price is ",products.price)

    let cartCost = localStorage.getItem('totalCost');
    //cartCost = parseInt(cartCost)
    console.log("my cart cost is ",cartCost)
    console.log(typeof cartCost)

    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost",cartCost + products.price)
    }
 else{
    localStorage.setItem("totalCost",products.price);
 }

}
 // this  is the script part for cart
 //this function displays cart
 function displayCart() {
  let    CartItems = localStorage.getItem("productsInCart");
  CartItems = JSON.parse(CartItems);
 let productContainer = document.querySelector(".products");

 console.log(CartItems);
 if (CartItems && productContainer) {
     productContainer.innerHTML = '';
     Object.values(CartItems).map(item => {
         productContainer.innerHTML +=                    //replace image with the folder in which you have saves the jpg
         `            
     <div class = "products">
          <i class="fa-solid fa-circle-xmark"></i>           
          <img src ="./images/${item.tag}.jpg">
          <span>${item.name}</span>
      </div>
      <div class = "price">${item.price}</div>
      <div class = "quantity">
        <i class="fa-solid fa-square-plus"></i>
        <span>${item.inCart}</span>
        <i class="fa-solid fa-square-minus"></i>
      </div>    
        `
     })
 }
 
}


//this checks the final storage
onLoadCartNumbers();
displayCart();
