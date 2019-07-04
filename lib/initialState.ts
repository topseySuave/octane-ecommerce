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
    savedItems: [],
    featuredProducts: [],
    cart: {
      items: [],
      totalAmount: '',
      error: {},
      loading: false,
      cartId: '',
    },
    currentProductItem: {
      attributes: [],
      reviews: []
    },
    shippingRegions: []
  },
  auth: {
    user: {},
    loading: false,
  }
};
