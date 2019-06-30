import { Typography, Empty } from 'antd';
import ProductCardHorizontal from 'components/ui/ProductCard/ProductCardHorizontal';
import _ from 'lodash';

const { Title } = Typography;

const SavedItems = ({ items }: any) => {
  return (
    <>
      <Title level={3}>Saved Item(s)</Title>
      {_.isEmpty(items) ? <Empty /> : items.map((item: any, index: number) => (
        <ProductCardHorizontal
          key={index}
          productDetail={item}
          saveForLaterPage
        />
      ))}
    </>
  );
};

export default SavedItems;
