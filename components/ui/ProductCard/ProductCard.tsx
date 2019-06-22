import { Button, Card, Typography } from 'antd';
import routes from 'lib/routes';
import { IProduct } from 'lib/types';
import { IMAGE_DIRECTORY_PREFIX } from 'lib/constants';
import { slugify } from 'lib/utils';
import connectComponent from 'lib/connectComponents';
import './ProductCard.scss';
import { memo } from 'react';
const { Link } = routes;
const { Text } = Typography;

interface Props {
  productDetail: IProduct;
  loading?: boolean;
  addToCart: (product: IProduct) => Function;
  setCurrentProductItem: (product: IProduct) => Function;
}

const ProductCard = memo(({ productDetail, loading }: Props) => {
  return (
    <div className="oct-card">
      <Link prefetch route={`/shop/${slugify(productDetail.name)}.htm?pid=${productDetail.product_id}`}>
        <a>
          <Card
            hoverable
            style={{ width: 220 }}
            loading={loading}
            cover={
              <img alt={`octane-${productDetail.name}`} src={`${IMAGE_DIRECTORY_PREFIX}${productDetail.thumbnail}`} />
            }
          >
            <Text strong className="product-name">{productDetail.name}</Text>
            <Text strong type="warning" className="product-price">${productDetail.price}</Text>
            <Button
              type="danger"
              shape="round"
              className="product-btn"
            >
              Bag it
            </Button>
          </Card>
        </a>
      </Link>
    </div>
  );
});

export default connectComponent(ProductCard, {});
