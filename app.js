
fetch('https://fakestoreapi.com/products/category/women%20clothing')
            .then(res=>res.json())
            .then(json=>console.log(json))
