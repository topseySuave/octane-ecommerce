import { Avatar, Button, Card, Typography } from 'antd';
import routes from 'lib/routes';

import './ProductCard.scss';
import { IProduct } from 'lib/types';
import { IMAGE_DIRECTORY_PREFIX } from 'lib/constants';
import { slugify } from 'lib/utils';

const { Link } = routes;
const { Text } = Typography;
const { Meta } = Card;

interface Props {
  productDetail: IProduct;
  loading?: boolean;
}

const ProductCard = ({ productDetail, loading }: Props) => (
  <div className="oct-card">
    <Link prefetch route={`/shop/${slugify(productDetail.name)}.htm`}>
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
          <Button type="danger" shape="round" className="product-btn">
            Bag it
          </Button>
        </Card>
      </a>
    </Link>
  </div>
);

export const ProductCardHorizontal = ({ productDetail }: Props) => (
  <Card style={{ marginTop: 18 }} loading={false} className="oct-horizontal-card">
    <Meta
      avatar={
        <Avatar src={`${IMAGE_DIRECTORY_PREFIX}${productDetail.thumbnail}`} />
      }
      title={productDetail.name}
      description={productDetail.description}
    />
    <Button type="link">Remove</Button>
  </Card>
);

export default ProductCard;
