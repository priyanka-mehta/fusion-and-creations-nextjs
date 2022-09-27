import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Community Portal" />
        <link rel="icon" href="/favicon.ico" />
        {/* mobile apps*/}
        <link
          href="css/bootstrap.css"
          type="text/css"
          rel="stylesheet"
          media="all"
        />
        <link
          href="css/style.css"
          type="text/css"
          rel="stylesheet"
          media="all"
        />
        <link href="css/font-awesome.css" rel="stylesheet" />
        <link href="css/percircle.css" rel="stylesheet" />

        {/* web-fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Buda:300&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        {/* web-fonts */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
