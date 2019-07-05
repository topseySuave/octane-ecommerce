import { Button, Col, Input, Row, Select, Typography } from "antd";
import { useState } from "react";
import "./ShippingForm.scss";
import { UserInterface } from "../Profile";

const { Option } = Select;
const { Title } = Typography;

interface Props {
  shippingRegions: Array<{}>;
  user: UserInterface;
  loading: boolean;
  handleSubmit: (inputs: any) => void;
}

const ShippingForm: React.SFC<Props> = ({
  shippingRegions,
  user,
  handleSubmit,
  loading
}) => {

  const initialState = {
    address_1: user.customer.address_1 || "",
    address_2: user.customer.address_2 || "",
    city: user.customer.city || "",
    region: user.customer.region || "",
    postal_code: user.customer.postal_code || "",
    country: user.customer.country || "",
    shipping_region_id: user.customer.shipping_region_id || ""
  };
  const [inputState, setInputState] = useState(initialState);

  /**
   * @param string
   * handle all other field change
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  
  /**
   * @param string
   * handle the country select field change specifically
   */
  const handleCountryChange = (value: any) =>
    setInputState({ ...inputState, country: value });

  /**
   * @param string
   * handle the shipping select field change specifically
   */
  const handleShippingChange = (value: any) =>
    setInputState({ ...inputState, shipping_region_id: value });

  /**
   * Handle the form submit with the event
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(inputState);
  };

  return (
    <>
      <Title level={3}>Change Shipping Address</Title>
      <form className="oct-shipping-form" onSubmit={handleFormSubmit}>
        <Row gutter={24}>
          <Col lg={12}>
            <Input
              placeholder="Enter Address 1"
              allowClear
              name="address_1"
              value={inputState.address_1}
              onChange={handleChange}
              required
            />
          </Col>
          <Col lg={12}>
            <Input
              placeholder="Enter Address 2"
              allowClear
              name="address_2"
              value={inputState.address_2}
              onChange={handleChange}
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Enter City"
              allowClear
              name="city"
              value={inputState.city}
              onChange={handleChange}
              required
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Enter Region"
              allowClear
              name="region"
              value={inputState.region}
              onChange={handleChange}
              required
            />
          </Col>
          <Col lg={8}>
            <Input
              placeholder="Postal Code"
              allowClear
              name="postal_code"
              value={inputState.postal_code}
              onChange={handleChange}
              required
            />
          </Col>
          <Col lg={8}>
            <Select
              defaultValue="Select Country"
              onChange={handleCountryChange}
            >
              {shippingRegions.map((region: any, index: number) => (
                <Option key={index} value={region.shipping_region}>
                  {region.shipping_region}
                </Option>
              ))}
            </Select>
          </Col>
          <Col lg={8}>
            <Select
              defaultValue="Select Shipping Region"
              onChange={handleShippingChange}
            >
              {shippingRegions.map((region: any, index: number) => (
                <Option key={index} value={region.shipping_region_id}>
                  {region.shipping_region}
                </Option>
              ))}
            </Select>
          </Col>
          <Button
            type="primary"
            size="large" 
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </Row>
      </form>
    </>
  );
};

export default ShippingForm;
