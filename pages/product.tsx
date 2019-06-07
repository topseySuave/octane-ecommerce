import { Layout } from 'antd';
import Header from 'components/Header';
import Product from 'components/Product';
import OctFooter from 'components/Footer';

import './index.scss';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Products | Octane - Ecommerce</title>
    </Head>
    <Header />
    <Product />
    <OctFooter />
  </Layout>
);
 