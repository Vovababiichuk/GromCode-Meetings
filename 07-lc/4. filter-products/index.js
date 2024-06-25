/**
//  * @param {object[]} products
//  * @param {object} filterObj
//  * @return {object}
 */

// input: [{}, ...{}]
// output: [{}, ...{}]

// algo
// 1. iterate products
// 2. filter and make conditional
// 3. return filtered array

function filterProducts(products, filterObj) {
  return products.filter(product => {
    const priceCondition = !filterObj.price || product.price <= filterObj.price;
    const cityCondition = !filterObj.city || product.city === filterObj.city;
    return priceCondition && cityCondition;
  });
}

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    city: 'New York',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 599.99,
    city: 'Los Angeles',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Desk Chair',
    price: 89.99,
    city: 'Chicago',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 49.99,
    city: 'Houston',
    category: 'Home Appliances',
  },
  {
    id: 5,
    name: 'Book',
    price: 19.99,
    city: 'New York',
    category: 'Books',
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 14.99,
    city: 'Phoenix',
    category: 'Clothing',
  },
  {
    id: 7,
    name: 'Bicycle',
    price: 299.99,
    city: 'San Antonio',
    category: 'Sports',
  },
];

// examples
// #1
console.log(filterProducts(products, { city: 'New York' }));
// returns ==>
// [
//   { id: 1, name: 'Laptop', price: 999.99, city: 'New York', category: 'Electronics' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
// ];

// #2
console.log(filterProducts(products, { price: 50 }));
// returns ==>
// [
//   { id: 4, name: 'Coffee Maker', price: 49.99, city: 'Houston', category: 'Home Appliances' },
//   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
//   { id: 6, name: 'T-shirt', price: 14.99, city: 'Phoenix', category: 'Clothing' },
// ];

// #3
console.log(filterProducts(products, { city: 'New York', price: 50 }));
// returns ==>
// [{ id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' }];
