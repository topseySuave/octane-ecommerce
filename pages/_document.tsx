import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ReactElement } from 'react';

interface IMyDocumentProps {
  styleTags: ReactElement<{}>[]
}

class MyDocument extends Document<IMyDocumentProps> {
  static async getInitialProps (context: any) {
    const sheet = new ServerStyleSheet()

    const page = context.renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags
    }
  }

  render () {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
