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
        const {title, image, price, id} = prod;
        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        prodInfo.innerHTML = 
        `<img src=${image} class="image">
        <div class="product-img-hover-icon">
            <button class="wish-icon"><img src="img/wishicon.png" alt="wish icon"></button>
            <button class="add-cart" id="cart-btn"><img src="img/carticon.png" alt="cart icon"></button>
        </div>
        <span class="id" style="display:none">${id}</span>
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


const cartList = document.getElementById('cart-list');

const btn = document.querySelector('button');
btn.addEventListener('click', addItem);

function addItem(e){
    if(e.target.classList.contains('add-cart')){
        const item = e.target.parentElement.parentElement;
        getItemInfo(item);
    }
}

function getItemInfo(item){
    const itemInfo = item.querySelector('.title').textContent;
    addToCart(itemInfo);
}

function addToCart(item){
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML=`<span>${item.title}</span>`;
    cartList.appendChild(cartItem);
}


// function addCart(){
//     let items = document.getElementsByClassName('product-info');
//     let cart = [];
//     let cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');
//         cartItem.innerText = 'WOOOOOOOO';
        


    // for(let i = 0; i < items.length; i++){
    //     // let itemId = items[i].getElementsByClassName('id');
    //     if(id === items[i].getElementsByClassName('id')){
    //         console.log('!!!!!!!');
    //         alert("add this product!");

    //         cart.push(items[i]);
    //         console.log(cart);
    //         // let cartItem = document.createElement('div');
            
    //         // cartItem.classList.add('cart-item');
    //         break;

    //     }else{
    //         console.log('no');
    //     }

    // }

// };



