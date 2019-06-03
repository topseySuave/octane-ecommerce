import { Layout } from 'antd';
import routes from 'lib/routes';
const { Footer } = Layout;

const { Link } = routes;

const OctFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <Link prefetch href="/">
      <a>Octane</a>
    </Link>{' '}
    ©2019 Created by Gabriel Micah
  </Footer>
);

export default OctFooter;
