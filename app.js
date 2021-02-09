const API_JEW = 'https://fakestoreapi.com/products/category/jewelery';
const API_WOM = 'https://fakestoreapi.com/products/category/women%20clothing';

const product = document.querySelector('.product-info');
const list = document.querySelector('.shop-product');

  async function getData(url){
    const res = await fetch(url)
    const result = await res.json(); 
    console.log(result);
    showProducts(result);

  }
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
            <div class="wish-icon"><img src="img/wishicon.png" alt="wish icon"></div>
            <div class="cart-icon"><img src="img/carticon.png" alt="cart icon"></div>
        </div>
        <span>${title}</span>
        <span>$${price}</span>`;
        list.appendChild(prodInfo);
    });
  }