import { Layout } from 'antd';
import { Link } from 'lib/routes';
const { Footer } = Layout;

const OctFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <Link prefetch href="/"><a>Octane</a></Link> ©2019 Created by Gabriel Micah
  </Footer>
);

export default OctFooter;
