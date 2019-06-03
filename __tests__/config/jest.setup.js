const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const Router = require('next/router');

Enzyme.configure({adapter: new Adapter()});

const actionWithPromise = () => {
  action('clicked link')();
  return new Promise((resolve, reject) => reject());
};

window.resizeTo = (width, height) => {
  window.innerWidth = width || window.innerWidth;
  window.innerHeight = height || window.innerHeight;
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
  route: '/mock-route',
  pathname: 'mock-path',
};

Router.router = mockedRouter;
