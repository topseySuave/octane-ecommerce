import { Col, Layout, Row, Typography, Spin } from 'antd';
import queryString from 'query-string';
import Attributes from 'components/ui/Attributes';
import { DISTANCE_FROM_TOP, LINE_HEIGHT, IMAGE_DIRECTORY_PREFIX, isWindows } from 'lib/constants';
import { addToCart, getCurrentProductItem, getProductAttributes} from 'lib/actions/products.actions';
import './Product.scss';
import connectComponent from 'lib/connectComponents';
import { useEffect, useState } from 'react';
import { IStoreProps } from 'lib/types';
import Head from 'next/head';

const { Content } = Layout;
const { Title, Text } = Typography;

const Product = ({ getCurrentProductItem, addToCart, productsReducer, getProductAttributes }: IStoreProps) => {
  const { loading, currentProductItem , cart} = productsReducer;

  const [inCart, setInCart] = useState(false);
  
  useEffect(() => {
    const { pid }: any = isWindows && queryString.parse(window.location.search);
    if(parseInt(pid, 10)) getCurrentProductItem(parseInt(pid, 10));
    getProductAttributes(parseInt(pid, 10));
  }, []);

  useEffect(() => {
    cart.items.forEach((item) => {
      if(item.product_id === currentProductItem.product_id) setInCart(true);
    });
  }, [currentProductItem])

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <Head>
        <title>{currentProductItem.name} | Octane - Ecommerce</title>
      </Head>
      {loading ? <div className="loader">
        <Spin size="large" tip="Loading..." />
      </div> :
      <div className="product-container">
        <div className="product-preview">
          <Row>
            <Col lg={24}>
              <Row>
                <Col lg={12}>
                  <div className="product-images">
                    <img
                      src={`${IMAGE_DIRECTORY_PREFIX}${currentProductItem.image}`}
                      alt={currentProductItem.name}
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="product-details">
                    <Title level={2}>{currentProductItem.name}</Title>
                    <Title level={3} style={{ color: 'red' }}>${currentProductItem.price}</Title>
                    <div style={{ marginBottom: 40 }}>
                      <Text>{currentProductItem.description}</Text>
                    </div>
                    <Attributes
                      isProduct
                      inCart
                      product={currentProductItem}
                      addToCart={addToCart}
                      withAttributes
                      attributes={currentProductItem.attributes}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>}
    </Content>
  );
};

export default connectComponent(Product, { addToCart, getCurrentProductItem, getProductAttributes });
