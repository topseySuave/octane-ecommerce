import { Layout, Row, Col, Card, Typography, Badge, Radio, Pagination } from "antd";
import { DISTANCE_FROM_TOP, LINE_HEIGHT } from 'lib/constants';
import ProductCard from "components/ui/ProductCard";
import './ProductsList.scss';

const { Title } = Typography;
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
                <div className="oct-attributes">
                  <Title level={4} style={{ color: '#CCC' }}>Color</Title>
                  <Radio.Group defaultValue="a" buttonStyle="outline">
                    <Radio.Button value="a"><Badge status="success" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="b"><Badge status="error" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="c"><Badge status="default" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                    <Radio.Button value="d"><Badge status="warning" className="oct-color-badge" /></Radio.Button>
                  </Radio.Group>
                </div>
                <div className="oct-attributes">
                  <Title level={4} style={{ color: '#CCC' }}>Size</Title>
                </div>
                <div className="oct-attributes">
                  <Title level={4} style={{ color: '#CCC' }}>Price Range</Title>
                </div>
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
