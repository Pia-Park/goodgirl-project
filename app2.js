

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
        prodInput.addEventListener('click', () => { alert("clicked!")})
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

window.document.querySelector('input').addEventListener('click', function(){
    alert('!!!!');
});