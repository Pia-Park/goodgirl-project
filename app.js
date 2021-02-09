
// fetch('https://fakestoreapi.com/products/category/women%20clothing')
//   .then(response => response.json())
//   .then(json => console.log(json));


  async function getData(){
    const res = await fetch('https://fakestoreapi.com/products/category/women%20clothing')
    const result = await res.json(); 
    console.log(result);

    const product = document.querySelector('.product-info');
    const list = document.querySelector('.shop-product');
    product.innerHTML = 
    `<img src=${result[0].image}>
    <span>${result[0].title}</span>
    <span>$${result[0].price}</span>`;
    list.appendChild(product);
  }

  getData();