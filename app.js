const API_JEW = 'https://fakestoreapi.com/products/category/jewelery';
const API_WOM = 'https://fakestoreapi.com/products/category/women%20clothing';

const product = document.querySelector('.product-info');
const list = document.querySelector('.shop-product');


async function getData(url){
    const res = await fetch(url)
    const result = await res.json(); 
    console.log(result);
    showProducts(result);
};

  getData(API_WOM);
  getData(API_JEW);

function showProducts(products){
    products.forEach((prod)=>{
        const {title, image, price} = prod;
        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        prodInfo.innerHTML = 
        `<img src=${image}>
        <div class="product-img-hover-icon">
            <button type="button" class="wish-icon"><img src="img/wishicon.png" alt="wish icon"></button>
            <button class="cart-icon" id="cart-add"><img src="img/carticon.png" alt="cart icon"></button>
        </div>
        <span class="title">${title}</span>
        <span class="price"><b>$${price}</b></span>`;
        list.appendChild(prodInfo);
    });
};

$(function(){
    $(window).scroll(function(){ 
      let num = $(this).scrollTop();
      if( num > 60 ){  
        $("#nav-search").css("position","fixed");
        $("#nav-search").css("display","flex");
      }else{
        $("#nav-search").css("position","absolute");
        $("#nav-search").css("display","none");
      }
    });
});


//inae's try-------------------------------//
// const cartIcon = document.querySelector('button');
// document.querySelector('button').addEventListener('click', function(){
//     alert('AHHHHH');
//     addCartItem(getData);
// });

// cartIcon.addEventListener('click', function(){
//     alert("Add this product!")
//     addCartItem();
// })

// function addCartItem() {
//     const item = document.getElementsByClassName('product-info');
//     const cartList = document.getElementsByClassName('cart-list');
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');
//     cartItem.innerHTML = `
//         <img src=${item.image} alt="product"/ >
//         <div>
//             <h4>${item.title}</h4>
//             <h5>$${item.price}</h5>
//         </div>
//     `
//     cartList.appendChild(cartItem);
// };
  
//inae's try-------------------------------//

function filter(){
    let value = document.getElementById('value').value.toLowerCase();
    let item = document.getElementsByClassName('product-info');

    for(let i = 0; i < item.length; i++){
        let prodTitle = item[i].getElementsByClassName('title');
        if(prodTitle[0].innerHTML.toLowerCase().indexOf(value)>-1){
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }
    }

}