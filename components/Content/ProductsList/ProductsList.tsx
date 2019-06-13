import { Layout, Row, Col, Card, Pagination } from "antd";
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from 'lib/constants';
import ProductCard from "components/ui/ProductCard";
import Attributes from 'components/ui/Attributes';
import './ProductsList.scss';

const { Content } = Layout;

const ProductsList = () => {
  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <div className="pagination-section">
        <Row>
          <Col md={12} lg={24} sm={12}>
            <Pagination defaultCurrent={6} total={500} />
          </Col>
        </Row>
      </div>
      <div className="product-list-container">
        <Row gutter={8}>
          <Col md={12} lg={6} sm={12} className="column">
            <div>
              <Card title="Filters" style={{ width: 300 }}>
                <Attributes />
              </Card>
            </div>
          </Col>
          <Col md={12} lg={18} sm={24}>
            <Row gutter={4}>
              <Col md={4} lg={6} sm={12}>
                <ProductCard />
              </Col>
              <Col md={4} lg={6} sm={12}>
                <ProductCard />
              </Col>
              <Col md={4} lg={6} sm={12}>
                <ProductCard />
              </Col>
              <Col md={4} lg={6} sm={12}>
                <ProductCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="pagination-section">
        <Row>
          <Col md={12} lg={24} sm={12}>
            <Pagination defaultCurrent={6} total={500} />
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default ProductsList;
