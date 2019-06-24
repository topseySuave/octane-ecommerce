import { Layout, Row, Col, Pagination, Spin, Empty } from "antd";
import queryString from "query-string";
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from "lib/constants";
import ProductCard from "components/ui/ProductCard";
import React from "react";
import connectComponent from "lib/connectComponents";
import { IStoreProps } from "lib/types";
import {
  getAllProducts,
  getProductWithAppAttr,
  getCartId
} from "lib/actions/products.actions";
import { setCurrentAppAttr } from "lib/actions/getAppAttributes.actions";
import "./ProductsList.scss";
import { getCurrentPageURL, setCurrentURL } from "lib/utils";
const { Content } = Layout;

const ProductsList = React.memo((props: IStoreProps) => {
  const { allProducts, loading } = props.productsReducer;
  const { currentAppAttr } = props.appAttributesReducer;
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    const query: any = getCurrentPageURL();
    const currentAppAttrName = currentAppAttr.name
      ? currentAppAttr.name.toLowerCase()
      : query.c || query.department;
    if ((query.c || query.department !== currentAppAttrName) || query.c || query.department) {
      props.setCurrentAppAttr(currentAppAttr);
      props.getProductWithAppAttr(currentAppAttr);
    }
  }, [currentAppAttr]);

  React.useEffect(() => {
    const query: any = getCurrentPageURL();
    if (query.page) setCurrentPage(parseInt(query.page, 10));

    {/* If there a no records in the products store object
    we get it from the server */}
    if (!allProducts.rows.length) {
      currentPage ? props.getAllProducts(true, currentPage) : props.getAllProducts();
    }
  }, [currentPage]);

  const onPageChange = (page: number) => {
    const query: any = getCurrentPageURL();
    setCurrentPage(page);
    setCurrentURL(queryString.stringify({ ...query, page }));
  };

  const paginationSection = (count: any) => {
    if (count > 20) {
      return (
        <div className="pagination-section">
          <Row>
            <Col md={12} lg={24} sm={12}>
              <Pagination
                onChange={onPageChange}
                defaultCurrent={currentPage}
                pageSize={20}
                total={count}
              />
            </Col>
          </Row>
        </div>
      );
    }
  };

  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <div className="product-list-container">
        {paginationSection(allProducts.count)}
        <Col md={24} lg={24} sm={24}>
          {loading ? (
            <div className="loader">
              <Spin size="large" tip="Loading..." />
            </div>
          ) : (
            !allProducts.rows.length && (
              <div className="loader">
                <Empty />
              </div>
            )
          )}
          <Row gutter={2} style={{ marginLeft: "150px" }}>
            {loading
              ? ""
              : allProducts.rows.map((product: any, index) => (
                  <Col key={index} md={4} lg={5} sm={12}>
                    <ProductCard productDetail={product} />
                  </Col>
                ))}
          </Row>
        </Col>
        {paginationSection(allProducts.count)}
      </div>
    </Content>
  );
});

export default connectComponent(ProductsList, {
  getAllProducts,
  setCurrentAppAttr,
  getProductWithAppAttr,
  getCartId
});
