import * as React from 'react';
import { Layout, Menu, Icon, Dropdown, Button, Badge, BackTop } from 'antd';
import AutoComplete from 'components/ui/AutoComplete';
import OctDrawer from 'components/ui/Drawer';
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from 'lib/constants';
import Logo from 'components/ui/Logo';
import './Header.scss';
import { Link } from 'lib/routes';
const { Header } = Layout;

const LayoutHeader: React.SFC = () => {
  const menu = () => (
    <Menu>
      <Menu.Item key="1">
        <Link prefetch href="/signin">
          <a>
            <Icon type="login" className="signin" />{'  '}
            Login
          </a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        <Link prefetch href="/signup">
          <a>
            <Icon type="user-add" className="signup" />{'   '}
            Join Octane and Shop
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="main-header-container">
      <div className="main-header">
        <div className="logo">
          <Link prefetch href="/">
            <a><Logo /></a>
          </Link>
        </div>
        <AutoComplete />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{ lineHeight: `${DISTANCE_FROM_TOP}px`, backgroundColor: 'transparent' }}
        >
          <Menu.Item key="signin">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Your Account <Icon type="caret-down" />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="cart">
            <OctDrawer ButtonAppearance={({ onClick }: { onClick: () => void }) => {
              return (
                <Button type="link" onClick={onClick}>
                  <Badge count={5}>
                    <span className="head-example" />
                  </Badge>
                  <Icon type="shopping" className="icon-cart" />
                </Button>
              );
            }} />
          </Menu.Item>
        </Menu>
      </div>
      <Header className="mini-header">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{ lineHeight: `${LINE_HEIGHT}px`, backgroundColor: 'transparent' }}
        >
          <Menu.Item key="category 1">
            French
          </Menu.Item>
          <Menu.Item key="category 2">
            Italian
          </Menu.Item>
          <Menu.Item key="category 3">
            Irish
          </Menu.Item>
          <Menu.Item key="category 4">
            Animal
          </Menu.Item>
          <Menu.Item key="category 5">
            Flowers
          </Menu.Item>
          <Menu.Item key="category 6">
            Chrismas
          </Menu.Item>
          <Menu.Item key="category 7">
            Valentine's
          </Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['3']}
          style={{ lineHeight: `${LINE_HEIGHT}px`, backgroundColor: 'transparent' }}
        >
          <Menu.Item key="category 1">
            Regional
          </Menu.Item>
          <Menu.Item key="category 2">
            Nature
          </Menu.Item>
          <Menu.Item key="category 3">
            Seasonal
          </Menu.Item>
        </Menu>
      </Header>
      <BackTop>
        <div className="ant-back-top-inner">
          <Icon type="to-top" />{" "}
          Back Up
        </div>
      </BackTop>
    </Header>
  );
}

export default LayoutHeader;
