import { Layout, Card, Tabs, Typography, Button } from "antd";
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from "lib/constants";
import Link from "next/Link";
import ShippingForm from './ShippingForm';
import AccountDetailForm from './AccountDetailForm';
import Orders from './Orders';
import SavedItems from './SavedItems';
import './Profile.scss';

const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const Profile = () => {
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
          <Link href="/logout?redirect=<url>">
            <a>
              <Button type="link">Log out</Button>
            </a>
          </Link>
        </Card>
      </div>
    </Content>
  );
}

export default Profile;
