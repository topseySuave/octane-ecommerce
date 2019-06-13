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

export interface IStoreProps {
  getAllProducts: () => void;
  setCurrentAppAttr: (currentAppAttr: IDepartmentValues | ICategoryValues) => void;
  getProductWithAppAttr: (appAttr: IDepartmentValues | ICategoryValues) => void;
  productsReducer: {
    allProducts: {
      rows: [];
      count: number;
    },
    featuredProducts: [];
    loading: boolean;
    cart: Array<IProduct>
  };
  appAttributesReducer: {
    currentAppAttr: IDepartmentValues | ICategoryValues,
    departments: object;
    categories: object;
  };
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
}

export interface Tab {
  tab: 'category' | 'department';
}
