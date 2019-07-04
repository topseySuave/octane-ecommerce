import { Button, Card, Layout, Tabs, Typography } from "antd";
import { DISTANCE_FROM_TOP, LINE_HEIGHT, isWindows } from "lib/constants";
import Link from "next/link";
import AccountDetailForm from "./AccountDetailForm";
import Orders from "./Orders";
import "./Profile.scss";
import SavedItems from "./SavedItems";
import ShippingForm from "./ShippingForm";
import { useEffect } from "react";
import { getUserData } from "lib/utils";
import Router from "next/router";
import connectComponent from "lib/connectComponents";
import { updateUserData } from "lib/actions/auth.actions";
import {
  getSavedItems,
  getShippingRegions
} from "lib/actions/products.actions";
import { IProductsReducer } from "lib/types";

const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

export interface UserInterface {
  customer: any;
  accessToken: string;
  expires_in: string;
}

interface Props {
  authReducer: {
    user: UserInterface;
    loading: boolean;
  };
  productsReducer: IProductsReducer;
  updateUserData: (value: any) => void;
  getSavedItems: () => void;
  getShippingRegions: () => void;
}

const Profile: React.SFC<Props> = ({
  productsReducer,
  authReducer: { user, loading },
  updateUserData,
  getSavedItems
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const input = e.target;
    const newFormInput = {
      name: input.username.value || null,
      email: input.email.value || null,
      dayPhone: input.dayPhone.value || null,
      evePhone: input.evePhone.value || null,
      modPhone: input.mobPhone.value || null,
      password: "gabmicah"
    };
    /**
     * We are getting an access UnAuthorized and would require a fix from turing.
     */
    updateUserData(newFormInput);
  };

  const { savedItems, shippingRegions, orders } = productsReducer;

  useEffect(() => {
    if (isWindows && getUserData().accessToken === false) Router.push("/signin");
    getSavedItems();
    getShippingRegions();
  }, []);

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <div className="oct-profile-container">
        <Title level={2}>Account Details</Title>
        <Card style={{ width: "100%" }}>
          <Tabs tabPosition={"left"}>
            <TabPane tab="My Octane Account" key="1">
              <AccountDetailForm
                user={user}
                loading={loading}
                handleSubmit={handleSubmit}
              />
            </TabPane>
            <TabPane tab="Account/Shipping Address" key="2">
              <ShippingForm shippingRegions={shippingRegions} />
            </TabPane>
            <TabPane tab="My Orders" key="3">
              <Orders orders={orders} />
            </TabPane>
            <TabPane tab="Saved for Later" key="4">
              <SavedItems items={savedItems} />
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

export default connectComponent(Profile, {
  updateUserData,
  getSavedItems,
  getShippingRegions
});
