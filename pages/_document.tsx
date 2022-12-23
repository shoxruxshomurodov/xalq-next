import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';



class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/gilroy-regular" rel="stylesheet" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
