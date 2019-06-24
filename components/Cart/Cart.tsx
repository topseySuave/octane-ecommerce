import { Typography, Empty } from 'antd';
import ProductCardHorizontal from 'components/ui/ProductCard/ProductCardHorizontal';

const { Title } = Typography;

const Cart = ({ cart, title }: any) => (
  <>
    <Title level={3}>{title}</Title>
    {cart.items.length ? cart.items.map((item: any, index: number) => (
      <ProductCardHorizontal
        key={index}
        productDetail={item}
        addToCart={() => {}}
      />
    )) : <Empty />}
    {cart.items.length && <Title level={3}>{`Cart-Total: $${cart.totalAmount}`}</Title>}
  </>
);

export default Cart;
