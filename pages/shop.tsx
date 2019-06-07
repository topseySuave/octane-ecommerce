import { Layout } from 'antd';
import Header from 'components/Header';
import ProductsList from 'components/Content/ProductsList';
import OctFooter from 'components/Footer';

import './index.scss';
import Head from 'next/head';

export default () => (
  <Layout>
    <Head>
      <title>Products list | Octane - Ecommerce</title>
    </Head>
    <Header />
    <ProductsList />
    <OctFooter />
  </Layout>
);
 