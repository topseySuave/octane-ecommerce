export interface Response {
  data: { 
    meta: { 
      message: string;
    }
  }
};

export interface ErrResponse {
  response: {
    status: number;
    data: {
      meta: {
        message: string;
      }
    }
  }
}

export interface IActions {
  type: string;
  data: any;
}

export interface IStoreProps {
  getAllProducts: (withFeatured?: boolean, page?: number) => void;
  setCurrentAppAttr: (currentAppAttr: IDepartmentValues | ICategoryValues) => void;
  getProductWithAppAttr: (appAttr: IDepartmentValues | ICategoryValues, page?: number) => void;
  getCartId: () => Function;
  getCartTotal: () => Function;
  addToCart: (product?: IProduct, attributes?: string) => Function;
  getCurrentProductItem: (pid: number) => Function;
  saveForLater: (itemId: number) => Function;
  getProductAttributes: (pid: number) => Function;
  getProductsReviews: (pid: number) => Function;
  productsReducer: IProductsReducer;
  appAttributesReducer: {
    currentAppAttr: IDepartmentValues | ICategoryValues,
    departments: object;
    categories: object;
  };
  authReducer: {
    user: {}
    loading: boolean;
  }
}

export interface IProductsReducer {
  allProducts: {
    rows: Array<IProduct>;
    count: number;
  },
  savedItems: Array<IProduct>;
  featuredProducts: Array<IProduct>;
  loading: boolean;
  cart: {
    totalAmount: number;
    items: Array<IProduct>;
    error: object;
    loading: Boolean;
    cartId: string;
  };
  currentProductItem: IProduct;
}

// Department set
export interface IDepartmentValues {
  /***
   * Name of the Department gotten from the API
   */
  name: string;
  /**
   * Department Id in either a string or a number
   */
  department_id: string | number;
  /**
   * Department description in string telling us
   * about the specifiec department
   */
  description: string;
}

export interface IAppAttributes {
  /**
   * the reposnse from the application attribute reducer
   */
  data: Array<IDepartmentValues | ICategoryValues>;
  /**
   * Check whether or not the data is still
   * loading from server
   */
  loading: boolean;
}

export interface IProductAttributes {
  attribute_name: string;
  attribute_value: string;
  attribute_value_id: number;
}

// Category Set
export interface ICategoryValues {
  category_id: number;
  name: string;
  description: string;
}
export interface CategoryResponse {
  count: number | string;
  rows: Array<ICategoryValues>;
}

// Product set
export interface IProduct {
  discounted_price: string;
  price: string;
  name: string;
  description: string;
  product_id: number;
  thumbnail: string;

  // optional properties
  image?: string;
  attributes?: string | Array<IProductAttributes>;
  item_id?: number;
  quantity?: number;
  subtotal?: string;
  image_2?: string;
  reviews?: Array<[]>;
}

export interface Tab {
  tab: 'category' | 'department';
}
