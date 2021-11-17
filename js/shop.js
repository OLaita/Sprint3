// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    products.forEach(function(product){
        // console.log(products.includes(products.id));
        item = new Object(product);

        if(product.id == id){
            
            cartList.push(item);
            
        }
        
    })  
    // console.log(cartList);

    
}

// Exercise 2
function cleanCart() {
    
    cartList = [];

}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;

    // console.log(cartList);
    cartList.forEach(function(item){

        switch(item.type){
            case 'grocery':
                subtotal.grocery.value += item.price;
                break;
            case 'beauty':
                subtotal.beauty.value += item.price;
                break;
            case 'clothes':
                subtotal.clothes.value += item.price;
                break;
        }

    });

    // console.log(subtotal);

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    
    calculateSubtotals();

    total = 0;

    for(let i in subtotal){
        // console.log(subtotal[i].value);
        total += subtotal[i].value;
    }

    // console.log(total);
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    var i = 0;
    cart = [];
    cartList.forEach(function(item){

        // console.log(item);

        // console.log(cartList[i].id + "/////");
        // console.log(cart.includes(cartList[i]));

        if(cart.includes(cartList[i])){
            // console.log(cart.includes(cart[id-1]));
            // console.log(cart[id-1], id);
            item.quantity++;
            item.subtotal = item.price * item.quantity;
        }else{
            item.quantity = 1;
            item.subtotal = item.price;
            cart.push(item);
        }

        i++;
    });

    // console.log(cart);
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // generateCart();

    cart.forEach(function(item){
        // console.log(item);

        item.subtotalWithDiscount = item.subtotal;

        if(item.id == 1 && item.quantity >= 3){
            item.price = 10;
            item.subtotalWithDiscount = item.price * item.quantity;
        }else if(item.id == 1 && item.quantity < 3){
            item.price = 10.5;
        }

        if(item.id == 3 && item.quantity >= 10){
            item.subtotalWithDiscount = (item.subtotal / 3) * 2;
        }

    })

    // console.log(cart);


}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    var i = 0;
    // cart = [];
    products.forEach(function(item){

        item = new Object(item);


        if(item.id == id){

            cartList.push(item);

            if(cart.includes(item)){
                // console.log(cart.includes(cart[id-1]));
                // console.log(cart[id-1], id);
                item.quantity++;
                item.subtotal = item.price * item.quantity;
            }else{
                item.quantity = 1;
                item.subtotal = item.price;
                cart.push(item);
            }
            i++;
        }

        
    });

    applyPromotionsCart();

    // console.log(cart);


}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    var i = 0;
    cart.forEach(function(item){

        if(item.id == id){

            var index = cart.indexOf(item);
            var i2 = cartList.indexOf(item);

            // console.log(index);
    
            if(item.quantity > 0){
                item.quantity--;
                cartList.splice(i2, 1);
            }
            if(item.quantity == 0){
                cart.splice(index, 1);
                cartList.splice(i2, 1);
            }
            
        }
        i++;
    })
    
    applyPromotionsCart();
    printCart();

}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    calculateTotal();
    

    if(cart.length != 0){
        document.getElementById("select").style.display = "none";
    }else{
        document.getElementById("select").style.display = "block";
    }

    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    cart.forEach(function(item){
        // console.log(item);
        lista.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>"+item.name+"<span><button onclick='removeFromCart("+item.id+")' type='button' class='btn btn-danger p-0 px-2'><span>-</span></button><span class='mx-3 badge badge-primary badge-pill'>"+item.quantity+"</span><span>"+item.price+"€/u</span></span></li>";
    })
    
    document.getElementById("ptotal").innerHTML = "<span>"+total+"€</span>"

    

}

