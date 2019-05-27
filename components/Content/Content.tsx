import { Layout, Typography, Row, Col } from 'antd';
import Carousel from 'components/ui/Carousel';
import DiscountCards from './DiscountCards';
import { DISTANCE_FROM_TOP, ONLINE_ASSET_IMAGES } from 'lib/constants';
import ProductCard from 'components/ui/ProductCard';
import './Content.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

const FeaturedProductList = () => (
  <Row gutter={32}>
    <Col span={6} lg={6} sm={1}>
      <a><ProductCard/></a>
    </Col>
  </Row>
);

const LayoutContent = () => (
  <Content style={{ marginTop: DISTANCE_FROM_TOP }}>
    <Carousel data={ONLINE_ASSET_IMAGES} type="image" />
    <Content style={{ padding: '50px 100px', marginTop: 20 }}>
      <DiscountCards />
      <div className="product-list-container">
        <Text type="secondary">RECOMMENDED</Text>
        <Title level={3}>Featured products</Title>
        <div id="#product-list" className="product-list">
          <FeaturedProductList />
        </div>
      </div>
    </Content>
  </Content>
)

export default LayoutContent;
