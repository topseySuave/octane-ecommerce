import Routes, * as nextRoutes from "next-routes";

// @ts-ignore
export const routes = nextRoutes() as Routes;
export const Router = routes.Router;
export const Link = routes.Link;

routes.add('customer', '/customer/account', 'customer')
.add('shop', '/shop', 'shop')
.add('product', '/shop/:slug', 'product');
