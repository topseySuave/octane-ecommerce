export default {
  appAttributes: {
    categories: {
      loading: false,
      data: [],
      currentCategoryList: [],
    },
    departments: {
      loading: false,
      data: [],
    },
    currentAppAttr: {},
  },
  products: {
    loading: false,
    allProducts: {
      rows: [],
      count: null
    },
    featuredProducts: [],
    cart: {
      items: [],
      totalAmount: '',
      error: {},
      loading: false,
      cartId: ''
    },
  }
};
