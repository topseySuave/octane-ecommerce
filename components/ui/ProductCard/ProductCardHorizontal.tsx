import connectComponent from "lib/connectComponents";
import { Card, Avatar, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import { IMAGE_DIRECTORY_PREFIX } from "lib/constants";
import { IProduct } from "lib/types";
import { removeFromCart, saveForLater, getCartTotal } from 'lib/actions/products.actions';

interface Props {
  productDetail: IProduct;
  loading?: boolean;
  cart?: any;
  addToCart?: (product: IProduct) => Function;
  removeFromCart?: (product: IProduct) => Function;
  getCartTotal?: () => Function;
  saveForLater?: (id?: number) => Function;
}

const ProductCardHorizontal = ({ productDetail, removeFromCart, saveForLater, getCartTotal }: Props) => (
  <Card style={{ marginTop: 18 }} loading={false} className="oct-horizontal-card">
    <Meta
      avatar={
        <Avatar src={`${IMAGE_DIRECTORY_PREFIX}${productDetail.thumbnail || productDetail.image}`} />
      }
      title={productDetail.name}
      description={
        <>
          <p>{`Price: ${productDetail.price}`}</p>
          <p>{`Sub-Total: ${productDetail.subtotal}`}</p>
        </>
      }
    />
    <Button type="link" onClick={() => removeFromCart && removeFromCart(productDetail)}>Remove</Button>
    <Button type="link" icon="heart" onClick={() => {
      saveForLater && saveForLater(productDetail.item_id);
      getCartTotal && getCartTotal();
    }}>
      Save for Later
    </Button>
  </Card>
);

export default connectComponent(ProductCardHorizontal, { removeFromCart, saveForLater, getCartTotal });
