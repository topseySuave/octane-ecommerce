import React from 'react';
import { Layout, Typography, Row, Col, Spin } from 'antd';
import Carousel from 'components/ui/Carousel';
import DiscountCards from './DiscountCards';
import { DISTANCE_FROM_TOP, ONLINE_ASSET_IMAGES } from 'lib/constants';
import ProductCard from 'components/ui/ProductCard';
import connectComponent from 'lib/connectComponents';
import { getAllProducts } from 'lib/actions/products.actions';
import './Content.scss';
import { IProduct } from 'lib/types';

const { Content } = Layout;
const { Title, Text } = Typography;

interface IProps {
  getAllProducts: () => void;
  productsReducer: { allProducts: object, featuredProducts: [], loading: boolean };
  appAttributesReducers: {};
}

const LayoutContent = React.memo((props: IProps) => {
  const { featuredProducts, loading } = props.productsReducer;
  React.useEffect(() => props.getAllProducts(true), []);

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
              {loading && <div className="loader"><Spin size="large" /></div>}
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
