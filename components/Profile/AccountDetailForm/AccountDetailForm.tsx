import { Input, Row, Col, Button, Typography } from "antd";
import './AccountDetailForm.scss';

const { Title } = Typography;

const AccountDetailForm = () => {
  return (
    <>
    <Title level={3}>Details</Title>
    <form className="oct-account-detail-form">
      <Row gutter={24}>
        <Col lg={12}>
          <Input
            placeholder="Enter Name"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={12}>
          <Input
            type="email"
            placeholder="Enter Email Address"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Day Phone"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Eve Phone"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Col lg={8}>
          <Input
            placeholder="Mob Phone"
            allowClear
            onChange={() => console.log("e")}
          />
        </Col>
        <Button type="primary" size="large">Submit</Button>
      </Row>
    </form>
    </>
  );
};

export default AccountDetailForm;
