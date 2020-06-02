import Router from 'next/router';

function trackPageView(url) {
    try {
      window.gtag('config', 'UA-155863208-1', {
        page_location: url
      });
    } catch (error) {
      // silences the error in dev mode
      // and/or if gtag fails to load
    }
  }

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;