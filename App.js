class Product {
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }

}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class ="card text-center mb-4">
            <div class = "card-body">
                <strong>Product name:</strong> ${product.name}
                <strong>Product price:</strong> ${product.price}
                <strong>Product year:</strong> ${product.year}
                <a class = ""></a>
            </div>
        </div>     
        `
        productList.appendChild(element);
        deleteProducto();
    }

    deteleProduct(){
        const reset = document.getElementById('product-form').reset();
    }

    erarseForm(){
        
    }

    showMessage(){

    }
}

// Dom event

document.getElementById('product-form')
.addEventListener('submit' , function(e){
    const productName = document.getElementById('name').value;
    const priceName = document.getElementById('price').value;
    const year = document.getElementById('year').value;


    const nuevoProducto = new Product(productName, priceName , year);
    
    const ui = new UI();
    e.preventDefault();
    ui.addProduct(nuevoProducto);
   
})

console.log("hello");


