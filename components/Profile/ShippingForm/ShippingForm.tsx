import { Input, Row, Col, Select, Button, Typography } from "antd";
import "./ShippingForm.scss";

const { Option } = Select;
const { Title } = Typography;


const ShippingForm = () => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <>
    <Title level={3}>Change Shipping Address</Title>
    <form className="oct-shipping-form">
      <Row gutter={24}>
        <Col lg={12}>
          <Input
            placeholder="Enter Address 1"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={12}>
          <Input
            placeholder="Enter Address 2"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Enter City"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Enter Region"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Postal Code"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Select
            defaultValue="Select Country"
            onChange={() => console.log("e")}
          >
            {children}
          </Select>
        </Col>
        <Col lg={8}>
          <Select
            defaultValue="Shipping Region"
            onChange={() => console.log("e")}
          >
            {children}
          </Select>
        </Col>
        <Col lg={8}>
          <Select
            defaultValue="Shipping Option"
            onChange={() => console.log("e")}
          >
            {children}
          </Select>
        </Col>
        <Button type="primary" size="large">Submit</Button>
      </Row>
    </form>
    </>
  );
};

export default ShippingForm;