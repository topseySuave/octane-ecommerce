import connectComponent from "lib/connectComponents";
import { Card, Avatar, Button } from "antd";
import Meta from "antd/lib/card/Meta";
import { IMAGE_DIRECTORY_PREFIX } from "lib/constants";
import { IProduct } from "lib/types";
import { removeFromCart, saveForLater } from 'lib/actions/products.actions';

interface Props {
  productDetail: IProduct;
  loading?: boolean;
  cart?: any;
  addToCart: (product: IProduct) => Function;
  removeFromCart: (product: IProduct) => Function;
  saveForLater: (id?: number) => Function;
}

const ProductCardHorizontal = ({ productDetail, removeFromCart, saveForLater }: Props) => (
  <Card style={{ marginTop: 18 }} loading={false} className="oct-horizontal-card">
    <Meta
      avatar={
        <Avatar src={`${IMAGE_DIRECTORY_PREFIX}${productDetail.thumbnail || productDetail.image}`} />
      }
      title={productDetail.name}
      description={`Sub-Total: ${productDetail.subtotal}`}
    />
    <Button type="link" onClick={() => removeFromCart(productDetail)}>Remove</Button>
    <Button type="link" icon="heart" onClick={() => saveForLater(productDetail.item_id)}>
      Save for Later
    </Button>
  </Card>
);

export default connectComponent(ProductCardHorizontal, { removeFromCart, saveForLater });
