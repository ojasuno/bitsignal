import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="BitSignal One"
            content="A website for The BitSignal."
          />
          <meta property="og:site_name" content="https://www.bitsignal.one/" />
          <meta
            property="og:description"
            content="A website for The BitSignal."
          />
          <meta property="og:title" content="BitSignal One" />
          <meta name="twitter:card" content="BitSignal One" />
          <meta name="twitter:title" content="BitSignal One" />
          <meta
            name="twitter:description"
            content="A website for The BitSignal."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
