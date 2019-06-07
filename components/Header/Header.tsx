import { BackTop, Badge, Button, Dropdown, Icon, Layout, Menu } from 'antd';
import AutoComplete from 'components/ui/AutoComplete';
import OctDrawer from 'components/ui/Drawer';
import Logo from 'components/ui/Logo';
import connectComponent from 'lib/connectComponents';
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from 'lib/constants';
import { IDepartmentValues, ICategoryValues } from 'lib/types';
import routes from 'lib/routes';
import { getDepartments, getCategories } from 'lib/actions/getAppAttributes.actions';
import * as React from 'react';
import './Header.scss';

const { Header } = Layout;
const { Link } = routes;

const LayoutHeader = React.memo((props: any) => {
  const menu = () => (
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

  React.useEffect(() => {
    props.getDepartments();
    props.getCategories();
  }, []);

  const { departments, categories } = props.appAttributesReducer.octAppReducer;

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
        <AutoComplete />
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
                    <Badge count={5}>
                      <span className="head-example" />
                    </Badge>
                    <Icon type="shopping" className="icon-cart" />
                  </Button>
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
          {categories.data.rows && categories.data.rows.map((category: ICategoryValues) =>
            (<Menu.Item key={category.name}>{category.name}</Menu.Item>))}
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
            (<Menu.Item key={department.name}>{department.name}</Menu.Item>))}
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
  getDepartments,
  getCategories
});
