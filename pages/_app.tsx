import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from 'lib/store';

interface Props {
  Component: any;
  ctx: any;
}
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: Props) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
