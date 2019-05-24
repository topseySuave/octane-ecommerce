import { Layout } from 'antd';
import Link from 'next/Link';
const { Footer } = Layout;

const OctFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <Link as="/"><a>Octane</a></Link> ©2019 Created by Gabriel Micah
  </Footer>
);

export default OctFooter;
