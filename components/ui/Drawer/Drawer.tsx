import { Drawer, Button } from "antd";
import React, { useState } from "react";

interface Props {
  ButtonAppearance?: any;
  CartItems?: any;
}

const OctDrawer = ({ ButtonAppearance, CartItems }: Props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <ButtonAppearance onClick={showDrawer} />
      <Drawer
        width={820}
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <CartItems />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e8e8e8",
            padding: "10px 16px",
            textAlign: "right",
            left: 0,
            background: "#fff",
            borderRadius: "0 0 4px 4px"
          }}
        >
          <Button
            style={{
              marginRight: 8
            }}
            onClick={onClose}
          >
            Close
          </Button>
          <Button onClick={onClose} type="primary">
            Checkout
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default OctDrawer;
