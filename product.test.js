const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('add products', () => {
    it('should add product', () => {
      expect(addProduct('product1', 5)).toStrictEqual({id: 1, name: 'product1', price: 5});
    });

    it('should throw error when name is not defined', () => {
        expect(() => {addProduct(null, 5);}).toThrow('name and price must be defined');
    });

    it('should throw error when price is not defined', () => {
        expect(() => {addProduct("name", null);}).toThrow('name and price must be defined');
    });

    it('should throw error when product alredy exists', () => {
        addProduct('product1', 5);
        expect(() => {addProduct('product1', 10);}).toThrow('product already exists');
    });
});

describe('remove products', () => {
    it('should remove product', () => {
        addProduct('product', 4);
        addProduct('product2', 8);
        expect(removeProduct(1)).toStrictEqual([{id: 2, name:'product2', price: 8}])
    });

    it(`should throw error when product doesn't exist`, () => {
        addProduct('product', 4);
        expect(() => {removeProduct(5);}).toThrow(`product doesn't exist`);
    });
});

describe('get products', () => {
    it('should return all products', () => {
        addProduct('product', 4);
        addProduct('product2', 8);
        expect(getProducts()).toStrictEqual([{id: 1, name:'product', price: 4}, {id: 2, name:'product2', price: 8}]);
    });
});

describe('get product', () => {
    it('should return one product', () => {
        addProduct('product', 4);
        expect(getProduct(1)).toStrictEqual({id: 1, name: 'product', price: 4});
    });

    it(`should throw error when product doesn't exist`, () => {
        addProduct('product', 4);
        expect(() => {getProduct(7);}).toThrow(`product doesn't exist`);
    });
});

describe('update product', () => {
    it('should update product', () => {
        addProduct('product', 4);
        expect(updateProduct(1, 'new product', 10)).toStrictEqual({id: 1, name: 'new product', price: 10});
        expect(getProduct(1)).toStrictEqual({id: 1, name: 'new product', price: 10});
    });

    it(`should throw error when product doesn't exist`, () => {
        addProduct('product', 4);
        expect(() => {updateProduct(5);}).toThrow(`product doesn't exist`);
    });

    it('should throw error when name is not defined', () => {
        addProduct('product', 4);
        expect(() => {updateProduct(1, null, 5);}).toThrow('name and price must be defined');
    });

    it('should throw error when price is not defined', () => {
        addProduct('product', 4);
        expect(() => {updateProduct(1, "name", null);}).toThrow('name and price must be defined');
    });

});
