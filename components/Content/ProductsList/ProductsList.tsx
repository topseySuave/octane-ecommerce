import { Layout, Row, Col, Card, Pagination, Spin, Empty } from "antd";
import { DISTANCE_FROM_TOP, LINE_HEIGHT, isWindows } from 'lib/constants';
import ProductCard from "components/ui/ProductCard";
import Attributes from 'components/ui/Attributes';
import queryString from 'query-string';
import React from "react";
import connectComponent from "lib/connectComponents";
import { IStoreProps } from "lib/types";
import { getAllProducts, getProductWithAppAttr, getCartId } from "lib/actions/products.actions";
import { setCurrentAppAttr } from "lib/actions/getAppAttributes.actions";
import './ProductsList.scss';

const { Content } = Layout;

const ProductsList = React.memo((props: IStoreProps) => {
  const { allProducts, loading } = props.productsReducer;
  const { currentAppAttr } = props.appAttributesReducer;
  const currentPage = 1;

  React.useEffect(() => {
    const query: any = isWindows && queryString.parse(window.location.search);
    const currentAppAttrName = currentAppAttr.name ? currentAppAttr.name.toLowerCase() : query.c || query.department;
    if (query.c || query.department !== currentAppAttrName) {
      props.setCurrentAppAttr(currentAppAttr);
      props.getProductWithAppAttr(currentAppAttr);
    }
  }, [currentAppAttr]);
  
  {/* If there a no records in the products store object
  we get it from the server */}
  React.useEffect(() => {
    if (!allProducts.rows.length) props.getAllProducts();
  }, []);

  const paginationSection = (count: any) => {
    if (count > 20) {
      return (
      <div className="pagination-section">
        <Row>
          <Col md={12} lg={24} sm={12}>
            <Pagination defaultCurrent={currentPage} total={count} />
          </Col>
        </Row>
      </div>
      );
    }
  };

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      {paginationSection(allProducts.count)}
      <div className="product-list-container">
        <Row gutter={8}>
          <Col md={12} lg={6} sm={12} className="column">
            <div>
              <Card title="Filters" style={{ width: 300 }}>
                <Attributes addToCart={() => {}} />
              </Card>
            </div>
          </Col>
          <Col md={12} lg={18} sm={24}>
            <Row gutter={4}>
              {loading ?
                <div className="loader">
                  <Spin size="large" tip="Loading..." />
                </div> : !allProducts.rows.length &&
                  <div className="loader">
                    <Empty />
                  </div>
              }
              {loading ? '' : allProducts.rows.map((product: any, index) => (
                <Col key={index} md={4} lg={6} sm={12}>
                  <ProductCard productDetail={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      {paginationSection(allProducts.count)}
    </Content>
  );
});

export default connectComponent(ProductsList, {getAllProducts, setCurrentAppAttr, getProductWithAppAttr, getCartId});
