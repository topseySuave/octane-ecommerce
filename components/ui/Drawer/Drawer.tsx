import { Drawer, Button } from "antd";
import React, { useState } from "react";

interface Props {
  ButtonAppearance?: any;
  CartItems?: any;
  showDrawer: () => void;
  onClose: () => void;
  visible: boolean;
}

const OctDrawer = ({
  ButtonAppearance,
  CartItems,
  showDrawer,
  onClose,
  visible
}: Props) => {
  return (
    <div>
      <ButtonAppearance onClick={showDrawer} />
      <Drawer width={820} closable={false} onClose={onClose} visible={visible}>
        <CartItems />
      </Drawer>
    </div>
  );
};

export default OctDrawer;
