import "../styles/globals.css";
import ThemeBar from "../components/ThemeBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
