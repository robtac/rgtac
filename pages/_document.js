import Document, { Head, Main, NextScript } from 'next/document';
// We wrap our scripts below in Fragment to avoid unnecessary mark up
import { Fragment } from 'react';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155863208-1');
      `
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <html>
          <Head />
        <body>
          <Main />
          <NextScript />
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-155863208-1"
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
        </body>
      </html>
    );
  }
}