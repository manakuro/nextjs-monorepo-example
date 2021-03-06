import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
const sharePatch = require('@module-federation/nextjs-mf/patchSharing')

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        {sharePatch()}
        <noscript id="__next_css__DO_NOT_USE__"></noscript>
        <script src="http://localhost:3001/_next/static/remoteEntryMerged.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
