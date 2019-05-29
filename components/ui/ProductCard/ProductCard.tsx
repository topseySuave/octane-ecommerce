import { Card, Button, Typography, Avatar } from "antd";
import { Link } from 'lib/routes';

import './ProductCard.scss';

const { Text } = Typography;
const { Meta } = Card;

const ProductCard = () => (
  <div className="oct-card">
    <Link prefetch route="/shop/product-page">
      <Card
        hoverable
        style={{ width: 220 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Text strong className="product-name">Leather Belt</Text>
        <Text strong type="warning" className="product-price">$14.55</Text>
        <Button type="danger" shape="round" className="product-btn">
          Bag it
        </Button>
      </Card>
    </Link>
  </div>
);

export const ProductCardHorizontal = () => (
  <Card style={{ marginTop: 18 }} loading={false} className="oct-horizontal-card">
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
    <Button type="link">Remove</Button>
  </Card>
);

export default ProductCard;
