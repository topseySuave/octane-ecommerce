import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ amount, name, stripeKey, onToken, onOpen }: any) => {
  return (
    <StripeCheckout
      amount={amount}
      name={name}
      stripeKey={stripeKey}
      allowRememberMe={false}
      token={onToken}
      label="Pay with 💳"
      opened={onOpen}
    />
  );
};

export default Checkout;
