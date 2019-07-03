import { Typography, Empty } from 'antd';
import ProductCardHorizontal from 'components/ui/ProductCard/ProductCardHorizontal';
import _ from 'lodash';

const { Title } = Typography;

const Orders = ({ orders }: any) => {
  return (
    <>
      <Title level={3}>My Order(s)</Title>
      {_.isEmpty(orders) ? <Empty /> : orders.map((order: any, index: number) => (
        <ProductCardHorizontal
          key={index}
          productDetail={order}
        />
      ))}
    </>
  );
};

export default Orders;
