
const product = document.querySelector('.product-info');
const list = document.querySelector('.shop-product');

  async function getData(){
    const res = await fetch('https://fakestoreapi.com/products/category/women%20clothing')
    const result = await res.json(); 
    console.log(result);
    showProducts(result);

  }

  getData();

  function showProducts(products){
    products.forEach((prod)=>{
        const {title, image, price} = prod;
        const prodInfo = document.createElement('div');
        prodInfo.classList.add('product-info');
        prodInfo.innerHTML = 
        `<img src=${image}>
        <span>${title}</span>
        <span>$${price}</span>`;
        list.appendChild(prodInfo);
    });
  }