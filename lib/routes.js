const routes = module.exports = require('next-routes')();

routes.add('customer', '/customer/account', 'customer')
.add('shop', '/shop', 'shop')
.add('product', '/shop/:slug', 'product');
