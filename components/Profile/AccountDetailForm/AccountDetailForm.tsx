import { Button, Col, Input, Row, Typography } from "antd";
import { useState } from "react";
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
  console.log(user.customer);
  const initialState = {
    name: user.customer.name || "",
    email: user.customer.email || "",
    day_phone: user.customer.day_phone || "",
    eve_phone: user.customer.eve_phone || "",
    mob_phone: user.customer.mob_phone || ""
  };
  const [inputState, setInputState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputState({ ...inputState, [e.target.name]: e.target.value });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(inputState);
  };

  return (
    <>
      <Title level={3}>Details</Title>
      <form className="oct-account-detail-form" onSubmit={onFormSubmit}>
        <Row gutter={24}>
          <Col lg={12}>
            <Input
              placeholder="Enter Name"
              name="name"
              value={inputState.name}
              onChange={handleChange}
            />
          </Col>
          <Col lg={12}>
            <Input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              value={inputState.email}
              onChange={handleChange}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Day Phone"
              name="day_phone"
              value={inputState.day_phone}
              onChange={handleChange}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Eve Phone"
              name="eve_phone"
              value={inputState.eve_phone}
              onChange={handleChange}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Mob Phone"
              name="mob_phone"
              value={inputState.mob_phone}
              onChange={handleChange}
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
