import { Typography, Empty, Button } from "antd";
import ProductCardHorizontal from "components/ui/ProductCard/ProductCardHorizontal";
import Checkout from "components/StripeForm";
import React from "react";
import { openNotificationWithIcon } from "lib/utils";

const { Title } = Typography;

const Cart = ({
  cart,
  title,
  onClose,
  getOrderId,
  orderId,
  makePayment
}: any) => {
  const stripeKey = "pk_test_lCTZL2Kh1ZtWtXxv5J5sxSbb00PEfenxGC";
  const onToken = (token: any) => {
    if (token.created && token.id && token.card.cvc_check === "pass") {
      console.log("token ====. ", token);
      makePayment(
        token.id,
        orderId,
        `Payment of ${cart.totalAmount}`,
        parseFloat(cart.totalAmount)
      );
      return openNotificationWithIcon("success", "payment has been made");
    }
  };

  const onOpen = () => {
    !orderId && getOrderId();
  };

  return (
    <>
      <Title level={3}>{title}</Title>
      {cart.items.length ? (
        cart.items.map((item: any, index: number) => (
          <ProductCardHorizontal key={index} productDetail={item} />
        ))
      ) : (
        <Empty />
      )}
      {cart.items.length && (
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
