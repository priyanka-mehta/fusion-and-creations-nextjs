import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="Best Interior Designer in Gandhidham, Kutch, Gujarat"
        />
        <meta
          name="description"
          content="Fusion and Creation is leading contemporary interior design firm in gandhidham"
        />
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
        <Script
          src="js/jzBox.js"
          onLoad={() => console.log(`JZBOX script loaded correctly`)}
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jarallax/1.10.7/jarallax.min.js"
          onLoad={() => console.log(`JARALLAX script loaded correctly`)}
        />

        <Script
          src="js/modernizr.custom.js"
          onLoad={() => console.log(`MODERNIZR script loaded correctly`)}
        />
        <Script src="js/easing.js" />
        <Script src="js/bootstrap.js" />
        <Script src="js/jquery-2.2.3.min.js" />
        <Script src="js/custom.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
