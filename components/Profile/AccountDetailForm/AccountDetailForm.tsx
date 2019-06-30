import { Button, Col, Input, Row, Typography } from "antd";
import "./AccountDetailForm.scss";
import { UserInterface } from "../Profile";

const { Title } = Typography;

interface Props {
  handleSubmit: any;
  user: UserInterface;
  loading: boolean;
}

const AccountDetailForm: React.SFC<Props> = ({
  handleSubmit,
  user,
  loading
}) => {
  if (!user.customer) return <div />;

  return (
    <>
      <Title level={3}>Details</Title>
      <form className="oct-account-detail-form" onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col lg={12}>
            <Input
              placeholder="Enter Name"
              name="username"
              value={user.customer.name || ""}
            />
          </Col>
          <Col lg={12}>
            <Input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={user.customer.email || ""}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Day Phone"
              name="dayPhone"
              value={user.customer.day_phone || ""}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Eve Phone"
              name="evePhone"
              value={user.customer.eve_phone || ""}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Mob Phone"
              name="mobPhone"
              value={user.customer.mob_phone || ""}
            />
          </Col>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
          >
            Submit
          </Button>
        </Row>
      </form>
    </>
  );
};

export default AccountDetailForm;
