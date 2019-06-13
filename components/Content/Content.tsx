import React from 'react';
import { Layout, Typography, Row, Col, Spin, Empty } from 'antd';
import Carousel from 'components/ui/Carousel';
import DiscountCards from './DiscountCards';
import { DISTANCE_FROM_TOP, ONLINE_ASSET_IMAGES } from 'lib/constants';
import ProductCard from 'components/ui/ProductCard';
import connectComponent from 'lib/connectComponents';
import { getAllProducts } from 'lib/actions/products.actions';
import './Content.scss';
import { IProduct, IStoreProps } from 'lib/types';

const { Content } = Layout;
const { Title, Text } = Typography;

const LayoutContent = React.memo((props: IStoreProps) => {

  {/* We destructure the products store to get the
  featured products and the loading boolean state */}
  const { featuredProducts, loading } = props.productsReducer;

  {/* As soon as the component mounts we want to get the products to display */}
  if (!featuredProducts.length) React.useEffect(() => props.getAllProducts(), []);

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP }}>
      <Carousel data={ONLINE_ASSET_IMAGES} type="image" withDetail />
      <Content style={{ padding: '50px 100px', marginTop: 20 }}>
        <DiscountCards />
        <div className="featured-product-list-container">
          <div className="featured-header">
            <Text type="secondary">RECOMMENDED</Text>
            <Title level={3}>Featured products</Title>
          </div>
          <div id="#product-list" className="featured-product-list">
            <Row gutter={32}>
              {/* We want to show a loader when the data is still loading */}
              {loading && <div className="loader"><Spin size="large" tip="Loading..." /></div>}

              {/* If there a no records in the featured products store object */}
              {!featuredProducts.length && <div className="loader"><Empty /></div>}

              {/* We loop throught the featured products to display them */}
              {featuredProducts.map((product: IProduct, index: number) => (
                <Col className="product-col-card" key={index} span={6} lg={6} sm={1}>
                  <a><ProductCard loading={loading} productDetail={product} /></a>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Content>
    </Content>
  );
});

export default connectComponent(LayoutContent, {getAllProducts});
