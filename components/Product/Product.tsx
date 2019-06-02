import { Col, Layout, Row, Typography } from 'antd';
import Attributes from 'components/ui/Attributes';
import { DISTANCE_FROM_TOP, LINE_HEIGHT, ONLINE_DEMO_PRODUCT_IMAGES } from 'lib/constants';
import './Product.scss';

const { Content } = Layout;
const { Title, Text } = Typography;

const Product = () => {
  return (
    <Content style={{ marginTop: DISTANCE_FROM_TOP + LINE_HEIGHT }}>
      <div className="product-container">
        <div className="product-preview">
          <Row>
            <Col lg={24}>
              <Row>
                <Col lg={12}>
                  <div className="product-images">
                    <img
                      src={ONLINE_DEMO_PRODUCT_IMAGES}
                      alt="product-images"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="product-details">
                    <Title level={2}>Cananda football Jersey T-shirt for men</Title>
                    <Title level={3} style={{ color: 'red' }}>$13.45</Title>
                    <div style={{ marginBottom: 40 }}>
                      <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus sequi saepe enim maiores dolorem tenetur,
                        officia aut vero eaque autem dignissimos accusamus quasi,
                        reiciendis aliquam ea! Mollitia at accusantium dolorem dolorum.
                        Doloremque, architecto asperiores. Sit assumenda nesciunt
                        neque ducimus maiores omnis ad voluptatum eius quis vel
                        laboriosam dolores veniam dicta dolorem veritatis asperiores,
                        itaque architecto magnam aspernatur a quibusdam voluptates iste.
                        Eveniet ratione aspernatur iste error soluta ab amet odio rerum eum maxime,
                        quis, nihil quisquam, delectus quam nam sequi.
                        Repellat culpa ut eum distinctio neque commodi quam similique placeat,
                        voluptatum aut ipsum hic alias aliquam libero corporis nam error.
                      </Text>
                    </div>
                    <Attributes product />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default Product;
