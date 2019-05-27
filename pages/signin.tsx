import { Layout } from 'antd';
import SignIn from 'components/SignIn';
import OctFooter from 'components/Footer';
import './index.scss';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Sign In | Octane - Ecommerce</title>
    </Head>
    <SignIn />
    <OctFooter />
  </Layout>
);
