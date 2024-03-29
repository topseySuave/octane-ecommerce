import { Button, Radio, Typography } from "antd";
import React from "react";
import "./Attributes.scss";
import { IProduct, IProductAttributes } from "lib/types";
import { RadioChangeEvent } from "antd/lib/radio";

const { Title } = Typography;

interface Props {
  isProduct?: boolean;
  inCart?: boolean;
  product?: IProduct;
  withAttributes?: boolean;
  attributes: any;
  addToCart?: (product?: IProduct, attr?: string) => void;
  setInCart?: (val: boolean) => void;
  getCartTotal?: () => Function;
}

const Attributes: React.SFC<Props> = ({
  product,
  isProduct,
  addToCart,
  inCart,
  withAttributes,
  attributes,
  setInCart,
  getCartTotal
}) => {
  let colors: Array<IProductAttributes> = [];
  let sizes: Array<IProductAttributes> = [];

  if (withAttributes) {
    colors = attributes.filter(
      (item: IProductAttributes) => item.attribute_name === "Color"
    );
    sizes = attributes.filter(
      (item: IProductAttributes) => item.attribute_name === "Size"
    );
  }

  // Set the attribute os the product when the color or size radio buttons are selected
  const [colorAttribute, setColorAttribute] = React.useState('White');
  const [sizeAttribute, setSizeAttribute] = React.useState('M');
  /**
   * @param e
   * Change the state of the color attribute each click event 
   */
  const onColorChange = (e: RadioChangeEvent) => {
    setColorAttribute(e.target.value);
  };
  /**
   * @param e 
   * Change the state of the csize attribute for each click event
   */
  const onSizeChange = (e: RadioChangeEvent) => {
    setSizeAttribute(e.target.value);
  };
  /**
   * assign the values of the changed state to a variable
   * to be sent to the addToCart action
   */
  const newAttribute = `${sizeAttribute}, ${colorAttribute}`;

  return (
    <>
      {withAttributes && (
        <>
          <div className="oct-attributes">
            <Title level={4} style={{ color: "#CCC" }}>
              Color
            </Title>
            <Radio.Group
              defaultValue={colorAttribute}
              buttonStyle="outline"
              onChange={onColorChange}
            >
              {colors.length &&
                colors.map(item => (
                  <Radio.Button
                    key={item.attribute_value_id}
                    className="oct-radio-button"
                    value={item.attribute_value}
                    style={{ backgroundColor: item.attribute_value }}
                  />
                ))}
            </Radio.Group>
          </div>
          <div className="oct-attributes">
            <Title level={4} style={{ color: "#CCC" }}>
              Size
            </Title>
            <Radio.Group
              defaultValue={sizeAttribute}
              buttonStyle="outline"
              onChange={onSizeChange}
            >
              {sizes.length &&
                sizes.map(item => (
                  <Radio.Button
                    key={item.attribute_value_id}
                    value={item.attribute_value}
                  >
                    {item.attribute_value}
                  </Radio.Button>
                ))}
            </Radio.Group>
          </div>
        </>
      )}
      {isProduct && (
        <>
          <Button
            type="danger"
            shape="round"
            icon="shopping-cart"
            size="large"
            disabled={inCart}
            onClick={() => {
              addToCart && addToCart(product, newAttribute);
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
