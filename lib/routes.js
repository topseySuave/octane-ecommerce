const routes = require('next-routes')();

routes.add('customer', '/customer/account', 'customer')
.add('shop', '/shop', 'shop')
.add('product', '/shop/:slug', 'product')
.add('category', '/shop?c=:category&department=:department', 'shop');

module.exports = routes;
