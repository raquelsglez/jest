let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
};

function addProduct(name, price) {
    if(!name || !price){
        throw new Error('name and price must be defined');
    };
    if(products.find(product => product.name === name)){
        throw new Error('product already exists');
    };
    id++;
    const product = {id, name, price}
    products.push(product);
    return product;
};

function removeProduct(id) {
    const productsCounter = products.length;
    products = products.filter(product => product.id !== id);
    if(products.length === productsCounter) {
        throw new Error(`product doesn't exist`);
    };
    return products;
};

function getProducts() {
    return products;
};

function getProduct(id){
    const product = products.find(product => product.id === id);
    if(!product){
        throw new Error(`product doesn't exist`);
    };
    return product;
};

function updateProduct(id, name, price) {
    const index = products.findIndex(product => product.id === id);
    if(index < 0){
        throw new Error(`product doesn't exist`);
    };

    if(!name || !price){
        throw new Error('name and price must be defined');
    };

    const newProduct = {id, name, price};
    products[index] = newProduct;
    return newProduct;
};

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
};