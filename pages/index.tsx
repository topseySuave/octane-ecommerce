import { Layout } from 'antd';
import Header from 'components/Header';
import Content from 'components/Content';
import CallToAction from 'components/ui/CallToAction';
import OctFooter from 'components/Footer';

import './index.scss';
import Head from 'next/head';

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
