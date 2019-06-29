import { Button, Card, Layout, Tabs, Typography } from 'antd';
import { DISTANCE_FROM_TOP, LINE_HEIGHT, isWindows } from 'lib/constants';
import Link from 'next/link';
import AccountDetailForm from './AccountDetailForm';
import Orders from './Orders';
import './Profile.scss';
import SavedItems from './SavedItems';
import ShippingForm from './ShippingForm';
import { useEffect } from 'react';
import { getUserData } from 'lib/utils';
import Router from 'next/router';

const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const Profile = () => {
  useEffect(() => {
    if (isWindows && !getUserData().accessToken) Router.push('/shop');
  }, []);

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <div className="oct-profile-container">
        <Title level={2}>Account Details</Title>
        <Card style={{ width: '100%' }}>
          <Tabs tabPosition={'left'}>
            <TabPane tab="My Octane Account" key="1">
              <AccountDetailForm />
            </TabPane>
            <TabPane tab="Account/Shipping Address" key="2">
              <ShippingForm />
            </TabPane>
            <TabPane tab="Orders" key="3">
              <Orders />
            </TabPane>
            <TabPane tab="Saved for Later" key="4">
              <SavedItems />
            </TabPane>
          </Tabs>
          <Link prefetch href="/signout">
            <a>
              <Button type="link">Log out</Button>
            </a>
          </Link>
        </Card>
      </div>
    </Content>
  );
};

export default Profile;
