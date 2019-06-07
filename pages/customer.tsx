import { Layout } from 'antd';
import Profile from 'components/Profile';
import OctFooter from 'components/Footer';
import './index.scss';
import Head from 'next/head';
import Header from 'components/Header';

export default () => (
  <Layout>
    <Head>
      <title>Account Details | Octane - Ecommerce</title>
    </Head>
    <Header />
    <Profile />
    <OctFooter />
  </Layout>
);
