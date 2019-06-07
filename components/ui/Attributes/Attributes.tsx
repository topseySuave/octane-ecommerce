import { Button, InputNumber, Radio, Typography } from 'antd';
import React from 'react';
import './Attributes.scss';

const { Title } = Typography;

interface Props {
  product?: boolean;
}

const Attributes: React.SFC<Props> = ({ product }) => {
  const onChange = (value: any) => {
    console.log('changed', value);
  };

  return (
    <>
      <div className="oct-attributes">
        <Title level={4} style={{ color: '#CCC' }}>
          Color
        </Title>
        <Radio.Group defaultValue="a" buttonStyle="outline">
          <Radio.Button
            className="oct-radio-button"
            value="1"
            style={{ backgroundColor: '#F62F5E' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="2"
            style={{ backgroundColor: '#6EB2FB' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="3"
            style={{ backgroundColor: '#00D3CA' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="4"
            style={{ backgroundColor: '#FE5C07' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="5"
            style={{ backgroundColor: '#F8E71C' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="6"
            style={{ backgroundColor: '#7ED321' }}
          />
          <Radio.Button
            className="oct-radio-button"
            value="7"
            style={{ backgroundColor: '#9013FE' }}
          />
        </Radio.Group>
      </div>
      <div className="oct-attributes">
        <Title level={4} style={{ color: '#CCC' }}>
          Size
        </Title>
        <Radio.Group defaultValue="a" buttonStyle="outline">
          <Radio.Button value="1">XL</Radio.Button>
          <Radio.Button value="2">XL</Radio.Button>
          <Radio.Button value="3">XL</Radio.Button>
          <Radio.Button value="4">XL</Radio.Button>
          <Radio.Button value="5">XL</Radio.Button>
          <Radio.Button value="6">XL</Radio.Button>
          <Radio.Button value="7">XL</Radio.Button>
        </Radio.Group>
      </div>
      {product && (
        <>
          <div className="oct-attributes oct-quantity">
            <Title level={4} style={{ color: '#CCC' }}>
              Quantity
            </Title>
            <InputNumber min={1} max={12} defaultValue={2} onChange={onChange} />
          </div>
          <Button type="danger" shape="round" icon="shopping-cart" size="large">
            Add to cart
          </Button>
          <Button type="link" icon="heart">
            Save for Later
          </Button>
        </>
      )}
    </>
  );
};

export default Attributes;
