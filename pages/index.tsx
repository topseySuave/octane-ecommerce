import { Layout } from 'antd';
import Content from 'components/Content';
import OctFooter from 'components/Footer';
import Header from 'components/Header';
import CallToAction from 'components/ui/CallToAction';

import Head from 'next/head';
import './index.scss';

export default () => (
  <Layout>
    <Head>
      <title>Octane - Ecommerce</title>
    </Head>
    <Header />
    <Content />
    <CallToAction />
    <OctFooter />
  </Layout>
);
