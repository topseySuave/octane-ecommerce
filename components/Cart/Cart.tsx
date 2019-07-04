import { Typography, Empty, Button } from "antd";
import ProductCardHorizontal from "components/ui/ProductCard/ProductCardHorizontal";
import Checkout from "components/StripeForm";
import React from "react";
import { openNotificationWithIcon } from "lib/utils";
import _ from "lodash";

const { Title } = Typography;

const Cart = ({
  cart,
  title,
  onClose,
  getOrderId,
  orderId,
  makePayment,
  getCartTotal
}: any) => {
  const stripeKey = "pk_test_NcwpaplBCuTL6I0THD44heRe";
  const onToken = (token: any) => {
    if (token.created && token.id && token.card.cvc_check === "pass") {
      makePayment(
        token.id,
        orderId,
        `Payment of ${cart.totalAmount}`,
        parseInt(cart.totalAmount) * 100
      );
    }
  };

  React.useEffect(() => {
    !cart.totalAmount && getCartTotal();
    cart.paymentMade &&
      openNotificationWithIcon("success", "payment has been made");
  }, [cart.paymentMade]);

  const onOpen = () => {
    !orderId && getOrderId();
  };

  return (
    <>
      <Title level={3}>{title}</Title>
      {cart.items.length ?
        cart.items.map((item: any, index: number) => (
          <ProductCardHorizontal key={index} productDetail={item} />
        ))
      : <Empty />
      }
      {!_.isEmpty(cart.items) && (
        <>
          <Title level={3}>{`Cart-Total: $${cart.totalAmount}`}</Title>
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
            <Checkout
              name={`Make payment for ${cart.totalAmount}`}
              amount={cart.totalAmount * 100}
              onToken={onToken}
              stripeKey={stripeKey}
              onOpen={onOpen}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
