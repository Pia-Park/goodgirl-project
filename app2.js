

const API_JEW = 'https://fakestoreapi.com/products/category/jewelery';
const API_WOM = 'https://fakestoreapi.com/products/category/women%20clothing';

window.addEventListener('load', getData(API_WOM));
window.addEventListener('load', getData(API_JEW));

const product = document.querySelector('.product-info');
const list = document.querySelector('.shop-product');

// getData(API_WOM);
// getData(API_JEW);

async function getData(url){
    const res = await fetch(url)
    const result = await res.json(); 
    console.log(result);
    showProducts(result);
};


function showProducts(products){
    products.forEach((prod)=>{
        const {title, image, price, id} = prod;
        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        const prodImg = document.createElement('img');
        prodImg.src= image;
        prodImg.classList.add('image');
        const prodInput = document.createElement('input')
        prodInput.addEventListener('click',addItem);
        prodInput.type = "image"
        prodInput.src = "/img/carticon.png"
        prodInput.classList.add('add-cart');
        prodImg.alt= ""
        const prodTitlePrice = document.createElement('div');
        prodTitlePrice.classList.add('product-text');
        prodTitlePrice.innerHTML=`
        <span class="id" style="display:none">${id}</span>
        <span class="title">${title}</span>
        <span class="price"><b>$${price}</b></span>`;
        prodInfo.appendChild(prodImg);
        prodInfo.appendChild(prodInput);
        prodInfo.appendChild(prodTitlePrice);
        list.appendChild(prodInfo);
    });
};

$(function(){
    $(window).scroll(function(){ 
      let num = $(this).scrollTop();
      if( num > 60 ){  
        $("#nav-search").css("position","fixed");
        $("#nav-search").css("display","flex");
        $("#cart-list").css("position", "fixed");
        $("#cart-list").css("margin-right", "0");

      }else{
        $("#nav-search").css("position","absolute");
        $("#nav-search").css("display","none");
        $("#cart-list").css("position", "absolute");
        $("#cart-list").css("right", "0");

      }
    });
});




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

};

totalPrice();


function addItem(e){
    if(e.target.classList.contains('add-cart')){
        const item = e.target.parentElement;
        getItemInfo(item);
        alert('You added 1itme to cart. Check your cart.');
    }
};

function getItemInfo(item){
    const itemInfo = {
        image: item.querySelector('.image').src,
        title: item.querySelector('.title').textContent,
        price: item.querySelector('.price').textContent
        };
    addToCart(itemInfo);
};

function addToCart(item){
    const cartItem = document.createElement('div');
    cartItem.classList.add('div-list');
    const cartList = document.getElementById('cart-list');
    const items = document.createElement('li');
    items.classList.add('cart-item');
    items.innerHTML=`
    <img src=${item.image}>
    <div class="item-text">
    <span>${item.title}</span>
    <span><b>${item.price}</b></span>
    </div>
    <span onclick="this.parentElement.parentElement.removeChild(this.parentElement.parentElement.firstChild)" class="remove"><b>X</b></span> 
    `;
    cartItem.appendChild(items);
    cartList.appendChild(cartItem);
};




const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', ()=>{
    const cartList = document.getElementById('cart-list');
    if(cartList.style.display="none"){
        cartList.style.display = "flex";
    } else {
        cartList.style.display = "none";
    }

});

const cartBtn2 = document.querySelector('.cart-btn2');
cartBtn2.addEventListener('click', ()=>{
    const cartList = document.getElementById('cart-list');
        cartList.style.display = "flex";
    

});


function totalPrice(){
    const cartList = document.getElementById('cart-list');
    const cartItem = document.getElementsByClassName('cart-item');
    
    let total = 0;
    for(let i = 0; i < cartItem.length; i++){
        let prodPrice = cartItem[i].getElementsByClassName('price');
        let numPice = parseFloat(prodPrice.innerText.replace('$', ''));
        total = total + numPice;

    }
    const totalCartPrice = document.createElement('div');
    totalCartPrice.classList.add('total');
    totalCartPrice.innerHTML = `<span>Total Price : $${total}</span>`;
    cartList.appendChild(totalCartPrice);
}

