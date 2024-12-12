const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
];

const cart = [];

function loadProducts() {
    const productsSection = document.getElementById("products");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.textContent = `${product.name} - $${product.price}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.onclick = () => addToCart(product);
        productDiv.appendChild(addButton);
        productsSection.appendChild(productDiv);
    });
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    cart.forEach((product, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${product.name} - $${product.price}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        itemDiv.appendChild(removeButton);
        cartItemsDiv.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("checkout").onclick = () => {
    alert(`Total: $${cart.reduce((total, product) => total + product.price, 0)}`);
};

window.onload = loadProducts;
