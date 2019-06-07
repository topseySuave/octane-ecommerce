import { Typography } from 'antd';
import { ProductCardHorizontal } from 'components/ui/ProductCard';

const { Title } = Typography;

const Orders = () => {
  return (
    <>
      <Title level={3}>Order(s)</Title>
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

export default Orders;
