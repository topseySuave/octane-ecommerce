import { Layout } from 'antd';
import SignUp from 'components/SignUp';
import OctFooter from 'components/Footer';
import './index.scss';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Sign Up | Octane - Ecommerce</title>
    </Head>
    <SignUp />
    <OctFooter />
  </Layout>
);
