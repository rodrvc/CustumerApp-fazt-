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
                <a href="#" class="btn btn-danger" name="delete">BORRAR</a>

            </div>
        </div>     
        `;
        productList.appendChild(element); 
        this.erarseForm();
        this.showMessage('producto Agregado' , 'success');
        
    }

    deteleProduct(element){
       if (element.name === 'delete') {
           console.log(element.parentElement.parentElement.parentElement)
           element.parentElement.parentElement.remove();
           console.log(element.parentElement.parentElement.parentElement);
           ;
           this.showMessage('producto eliminado' , 'danger');
        
       }
    }

    erarseForm(){
        document.getElementById('product-form').reset(); 
        
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        
        div.className = `alert alert-${cssClass} alert-dismissible fade show mt-4`;
        div.innerHTML = `
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>`
        div.appendChild(document.createTextNode(message));
        // SHOW IN DOM
        const container = document.querySelector('.container');
        
        const app = document.querySelector('#App');
        container.insertBefore(div , app );
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
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

    if (productName === "" || priceName === "" || year === "") {
       return ui.showMessage('faltan campos', 'danger');
    }
    
    
    
    ui.addProduct(nuevoProducto);
    
    e.preventDefault();
   
})

console.log("hello");

// Dom element
document.getElementById('product-list').addEventListener('click' , function(e){
    const ui = new UI();
    ui.deteleProduct(e.target);
})

const div2 = document.createElement('div');
div2.innerHTML = `<h1>hola amigos</h1>`
const div3 = document.getElementById('product-list');

div3.appendChild(div2);