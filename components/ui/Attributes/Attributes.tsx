import { Button, InputNumber, Radio, Typography } from "antd";
import React from "react";
import "./Attributes.scss";
import { IProduct, IProductAttributes } from "lib/types";

const { Title } = Typography;

interface Props {
  isProduct?: boolean;
  inCart?: boolean;
  product?: IProduct;
  withAttributes?: boolean;
  attributes: any;
  addToCart?: (product?: IProduct) => void;
  setInCart?: (val: boolean) => void;
  getCartTotal?: () => Function;
}

const Attributes: React.SFC<Props> = ({
  product,
  isProduct,
  addToCart,
  inCart,
  withAttributes,
  attributes, setInCart, getCartTotal
}) => {
  const onChange = (value: any) => {
    console.log("changed", value);
  };

  let colors: Array<IProductAttributes> = [];
  let sizes: Array<IProductAttributes> = [];

  if(withAttributes) {
    colors = attributes.filter(
      (item: IProductAttributes) => item.attribute_name === "Color"
    );
    sizes = attributes.filter(
      (item: IProductAttributes) => item.attribute_name === "Size"
    );
  }

  return (
    <>
      {withAttributes && <>
        <div className="oct-attributes">
          <Title level={4} style={{ color: "#CCC" }}>
            Color
          </Title>
          <Radio.Group defaultValue="a" buttonStyle="outline">
            {colors.length &&
              colors.map(item => (
                <Radio.Button
                  key={item.attribute_value_id}
                  className="oct-radio-button"
                  value={item.attribute_value_id}
                  style={{ backgroundColor: item.attribute_value }}
                />
              ))}
          </Radio.Group>
        </div>
        <div className="oct-attributes">
          <Title level={4} style={{ color: "#CCC" }}>
            Size
          </Title>
          <Radio.Group defaultValue="a" buttonStyle="outline">
            {sizes.length &&
              sizes.map(item => (
                <Radio.Button
                  key={item.attribute_value_id}
                  value={item.attribute_value_id}
                >
                  {item.attribute_value}
                </Radio.Button>
              ))}
          </Radio.Group>
        </div>
      </>}
      {isProduct && (
        <>
          <div className="oct-attributes oct-quantity">
            <Title level={4} style={{ color: "#CCC" }}>
              Quantity
            </Title>
            <InputNumber
              min={1}
              max={12}
              defaultValue={2}
              onChange={onChange}
            />
          </div>
          <Button
            type="danger"
            shape="round"
            icon="shopping-cart"
            size="large"
            disabled={inCart}
            onClick={() => {
              addToCart && addToCart(product);
              setInCart && setInCart(true);
              getCartTotal && getCartTotal();
            }}
          >
            {inCart ? "Added to Cart" : "Add to cart"}
          </Button>
        </>
      )}
    </>
  );
};

export default Attributes;
