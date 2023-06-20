const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
});

module.exports = Cart;
//A cart will belong a single user but may hold multiple products
//Carts table will hold different carts for different users 



















// const path = require('path');
// const fs = require('fs');

// const p = path.join(
//     path.dirname(require.main.filename),
//     'data',
//     'cart.json'
// );

// module.exports = class Cart {
//     static addProduct(id, productPrice) {
//         //Fetch the previous cart
//         fs.readFile(p, (err, fileContent) => {
//             let cart = {
//                 products: [],
//                 totalPrice: 0
//             };
//             if (!err) {
//                 if(fileContent){
//                     // console.log(fileContent);
//                     cart = JSON.parse(fileContent); //JSON.parse helps to convert into object
//                     // console.log(JSON.parse(fileContent));
//                     // console.log(cart.products);
//                 }
//             } else {
//                 fs.writeFile(p, JSON.stringify(cart), err => {
//                    console.log("Error initialising cart", err);
//                 });
//             }

//             // console.log("hello");
//             // console.log(cart.products, cart.products.length);
//             //Analyse the cart - Find existing product
//             // console.log('he');
//             const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
//             const existingProduct = cart.products[existingProductIndex];
//             let updatedProduct;

//             //Add new one/increase quantity
//             if (existingProduct) {
//                 updatedProduct = { ...existingProduct };
//                 updatedProduct.qty = updatedProduct.qty + 1;
//                 cart.products = [...cart.products];
//                 cart.products[existingProductIndex] = updatedProduct;
//             } else {
//                 updatedProduct = { id: id, qty: 1 };
//                 cart.products = [...cart.products, updatedProduct];
//             }
//             cart.totalPrice = cart.totalPrice + +productPrice;
//             console.log('hello');
//             fs.writeFile(p, JSON.stringify(cart), err => {
//                 console.log(err);
//             });

//         });
//     }
// }

/*
 Static methods in a class are used for functionalities that are not tied to specific instances of the class but are associated with the class itself. These methods can be accessed directly on the class without the need for creating an instance of the class.
*/

// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(require.main.filename),
//   'data',
//   'cart.json'
// );

// module.exports = class Cart {
//   static addProduct(id, productPrice) {
//     // Fetch the previous cart
//     fs.readFile(p, (err, fileContent) => {
//       let cart = { products: [], totalPrice: 0 };
//       if (!err) {
//         cart = JSON.parse(fileContent);
//       }
//       // Analyze the cart => Find existing product
//       const existingProductIndex = cart.products.findIndex(
//         prod => prod.id === id
//       );
//       const existingProduct = cart.products[existingProductIndex];
//       let updatedProduct;
//       // Add new product/ increase quantity
//       if (existingProduct) {
//         updatedProduct = { ...existingProduct };
//         updatedProduct.qty = updatedProduct.qty + 1;
//         cart.products = [...cart.products];
//         cart.products[existingProductIndex] = updatedProduct;
//       } else {
//         updatedProduct = { id: id, qty: 1 };
//         cart.products = [...cart.products, updatedProduct];
//       }
//       cart.totalPrice = cart.totalPrice + +productPrice;
//       fs.writeFile(p, JSON.stringify(cart), err => {
//         console.log(err);
//       });
//     });
//   }

//   static deleteProduct(id, productPrice) {
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         return;
//       }
//       const updatedCart = { ...JSON.parse(fileContent) };
//       const product = updatedCart.products.find(prod => prod.id === id);
//       if (!product) {
//         return;
//       }
//       const productQty = product.qty;
//       updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
//       updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
//       fs.writeFile(p, JSON.stringify(updatedCart), err => {
//         console.log(err);
//       });
//     })
//   }

//   static getCart(cb) {
//     fs.readFile(p, (err, fileContent) => {
//        const cart = JSON.parse(fileContent);
//        if(err){
//          cb(null);
//        } else{
//         cb(cart);
//        }
//     });
//   }
// };

