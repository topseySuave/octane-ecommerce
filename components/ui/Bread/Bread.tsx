import React from 'react';
import { Breadcrumb } from "antd";

interface Prop {
  BreadItem: Array<string>
}

const Bread: React.SFC<Prop> = ({ BreadItem }) => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    {BreadItem.map((item, index) => {
      <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
    })}
  </Breadcrumb>
);

export default Bread;
