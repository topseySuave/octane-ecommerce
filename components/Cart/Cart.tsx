import { Typography } from "antd";
import { ProductCardHorizontal } from 'components/ui/ProductCard';

const { Title } = Typography;

const Cart = () => {
  return (
    <>
      <Title level={3}>Saved Item(s)</Title>
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
      <ProductCardHorizontal />
    </>
  );
};

export default Cart;
