import { Row, Col, Card } from "antd";
import '../Content.scss';

const DiscountCards = () => (
  <Row gutter={{ sm: 8, md: 8, lg: 8 }}>
    <Col span={8} className="column">
      <Card
        bordered={false}
        style={{ width: '90%' }}
        cover={<img alt="example" src="http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/2016/02/banner-02-medium-notinclude.jpg" />}
      />
    </Col>
    <Col span={8} className="column">
      <Card
        bordered={false}
        style={{ width: '90%' }}
        cover={<img alt="example" src="http://fab.oxygenna.com/fashion/wp-content/uploads/sites/2/2016/02/banner-01-medium-notinclude.jpg" />}
      />
    </Col>
    <Col span={8} className="column">
      <Card
        bordered={false}
        style={{ width: '90%' }}
        cover={<img alt="example" src="https://preview.oklerthemes.com/ezy/1.1.0/img/shop/product-bg-13.jpg" />}
      />
    </Col>
  </Row>
);

export default DiscountCards;