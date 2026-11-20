import { Html, Head, Main, NextScript } from "next/document";
import { themes, defaultTheme } from "../content/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0c0a08" />
        <meta
          name="keywords"
          content="Interior designer in Gandhidham, Kutch, Gujarat, Viraas, interior design studio, home interiors, office interiors"
        />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Self-hosted fonts (see globals.css); preloaded because the hero uses all three */}
        {["cormorant-garamond-latin", "cormorant-garamond-italic-latin", "jost-latin"].map((name) => (
          <link
            key={name}
            rel="preload"
            href={`/fonts/${name}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}

        {/* Lets the CSS enable scroll animations only when JavaScript is running */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />

        {/* Applies a preview theme (?theme=<id>) before first paint, so there is no flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=new URLSearchParams(location.search),t=p.get('theme'),s=null,r=document.documentElement;try{s=sessionStorage.getItem('previewTheme')}catch(e){}t=t||s;if(t||p.has('preview'))r.classList.add('has-themebar');if(t&&t!=='${defaultTheme}'&&${JSON.stringify(themes.map((t) => t.id))}.indexOf(t)>-1)r.setAttribute('data-theme',t);})()`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
