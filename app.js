fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)})
            .catch(err=>{
                console.log(err);
            });