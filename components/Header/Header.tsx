import { BackTop, Badge, Button, Dropdown, Icon, Layout, Menu } from 'antd';
import { isEmpty } from 'lodash';
import AutoComplete from 'components/ui/AutoComplete';
import OctDrawer from 'components/ui/Drawer';
import Logo from 'components/ui/Logo';
import connectComponent from 'lib/connectComponents';
import { DISTANCE_FROM_TOP, LINE_HEIGHT, isWindows } from 'lib/constants';
import { IDepartmentValues, ICategoryValues } from 'lib/types';
import routes from 'lib/routes';
import { getDepartments, getCategories, setCurrentAppAttr } from 'lib/actions/getAppAttributes.actions';
import { getCartId, getCartItems, getCartTotal, searchProductItem } from 'lib/actions/products.actions';
import { addSignedInUser } from 'lib/actions/auth.actions';
import * as React from 'react';
import { slugify, urlencode, getUserData } from 'lib/utils';
import './Header.scss';
import Cart from 'components/Cart';

const { Header } = Layout;
const { Link } = routes;

const LayoutHeader = React.memo((props: any) => {
  const menu = () => {
    if (getUserData().accessToken) {
      return (
        <Menu>
          <Menu.Item key="1">
            <Link prefetch href="/customer">
              <a>
                <Icon type="user" className="signup" />
                {'   '}
                My Account
              </a>
            </Link>
          </Menu.Item>
        </Menu>
      );
    }
    return (
      <Menu>
        <Menu.Item key="1">
          <Link prefetch href="/signin">
            <a>
              <Icon type="login" className="signin" />
              {'  '}
              Login
            </a>
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">
          <Link prefetch href="/signup">
            <a>
              <Icon type="user-add" className="signup" />
              {'   '}
              Join Octane and Shop
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    );
  };

  const { departments, categories } = props.appAttributesReducer;
  const { cart } = props.productsReducer;

  React.useEffect(() => {
    if (!departments.data.length && !categories.data.length) {
      props.getDepartments();
      props.getCategories();
      props.getCartItems();
      props.getCartTotal();
      props.addSignedInUser();
      if(!localStorage.getItem('cart_id')) props.getCartId();
    }
  }, []);

  const renderMenuItems = (category: ICategoryValues) =>
  (<Menu.Item key={category.name} onClick={() => props.setCurrentAppAttr(category)}>
    <Link route='shop' params={{ c: slugify(category.name.toLowerCase()) }}>
      <a>{category.name}</a>
    </Link>
  </Menu.Item>);

  const onSearch = (value: string) => {
    // Only start search for a product when the search string is
    // more than 3 characters long.
    if (urlencode(value).length > 3) {
      props.searchProductItem(urlencode(value));
    }
  }

  return (
    <Header className="main-header-container">
      <div className="main-header">
        <div className="logo">
          <Link prefetch href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        {/* Auto Complete */}
        <AutoComplete onSearch={onSearch} />

        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{
            backgroundColor: 'transparent',
            lineHeight: `${DISTANCE_FROM_TOP}px`,
          }}
        >
          <Menu.Item key="signin">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Your Account <Icon type="caret-down" />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="cart">
            <OctDrawer
              ButtonAppearance={({ onClick }: { onClick: () => void }) => {
                return (
                  <Button type="link" onClick={onClick}>
                    {!isEmpty(cart.items) && <Badge count={cart.items.length}>
                      <span className="head-example" />
                    </Badge>}
                    <Icon type="shopping" className="icon-cart" />
                  </Button>
                );
              }}
              CartItems={() => {
                return (
                  <Cart cart={cart} title='Cart item(s)' />
                );
              }}
            />
          </Menu.Item>
        </Menu>
      </div>
      <Header className="mini-header">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{
            backgroundColor: 'transparent',
            lineHeight: `${LINE_HEIGHT}px`,
          }}
        >
          {/* when the page load and react useEffect is called we dont get the currentCategoryList
          and the categories.data.rows immediately, so we check if the are empty and show notice until
          the data for categories.data.rows is received (currentCategoryList still remains empty)
          when a department is selected by the user the currentCategoryList is then updated in the store
          and then we can change the displayed list in the menu */}
          {isEmpty(categories.currentCategoryList) && isEmpty(categories.data.rows) ? '' :
           !isEmpty(categories.currentCategoryList) ? categories.currentCategoryList.map(renderMenuItems) :
           !isEmpty(categories.data.rows) && categories.data.rows.map(renderMenuItems)
          }
        </Menu>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{
            backgroundColor: 'transparent',
            lineHeight: `${LINE_HEIGHT}px`,
          }}
        >
          {departments.data.map((department: IDepartmentValues) =>
            (<Menu.Item key={department.name} onClick={() => props.setCurrentAppAttr(department, 'department')}>
              <Link route='shop' params={{ department: slugify(department.name.toLowerCase()) }}>
                <a>{department.name}</a>
              </Link>
            </Menu.Item>))}
        </Menu>
      </Header>
      <BackTop>
        <div className="ant-back-top-inner">
          <Icon type="to-top" /> Back Up
        </div>
      </BackTop>
    </Header>
  );
});

export default connectComponent(LayoutHeader, {
  getDepartments, searchProductItem,
  getCategories, setCurrentAppAttr,
  getCartId, getCartItems, getCartTotal, addSignedInUser
});
