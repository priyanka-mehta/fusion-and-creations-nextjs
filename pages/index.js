import Head from "next/head";
import Script from "next/script";
import Banner from "../compontnts/Banner";
import About from "../compontnts/About";
import Services from "../compontnts/Services";
import Products from "../compontnts/Products";
import Gallary from "../compontnts/Gallary";
import Contact from "../compontnts/Contact";
import Footer from "../compontnts/Footer";
import Feedback from "../compontnts/Feedback";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fusion and Creations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Banner />
      <About />
      <Services />
      <Products />
      <Gallary />
      <Feedback />
      <Contact />
      <Footer />

      {/* <!-- custom javascript start --> */}
      {/* <Script id="test" src="js/custom.js"></Script> */}
      {/* <Script id="test">
        $(document).ready(function () {
          $('#home1Detail').hide();
          $('#home2Detail').hide();
          $('#home3Detail').hide();
          $('#saloon1Detail').hide();
          $('#restaurant1Detail').hide();
          $('#office1Detail').hide();
        });
        $("#home1").click(function () {
          $("#home1").hide();
          $("#home2").hide();
          $("#home3").hide();
          $("#home1Detail").show();
        });
        $("#home2").click(function () {
          $("#home1").hide();
          $("#home2").hide();
          $("#home3").hide();
          $("#home2Detail").show();
        });
        $("#home3").click(function () {
          $("#home1").hide();
          $("#home2").hide();
          $("#home3").hide();
          $("#home3Detail").show();
        });
        $("#saloon1").click(function () {
          $("#saloon1").hide();
          $("#saloon1Detail").show();
        });
        $("#restaurant1").click(function () {
          $("#restaurant1").hide();
          $("#restaurant1Detail").show();
        });
        $("#office1").click(function () {
          $("#home1").show();
          $("#home2").show();
          $("#home3").show();
          $("#home1Detail").hide();
          $("#home2Detail").hide();
          $("#home3Detail").hide();
          $("#office1").hide();
          $("#office1Detail").show();
        });
      </Script> */}
      {/* <!-- custom javascript end --> */}
      {/* <!-- jarallax --> */}
      {/* <Script id="test" src="js/SmoothScroll.min.js"></Script> */}
      {/* <Script id="test" src="js/jarallax.js"></Script> */}

      {/* <Script id="test" type="text/javascript">
        $('.jarallax').jarallax({
          speed: 0.5,
          imgWidth: 1366,
          imgHeight: 768
        })
      </Script> */}
      {/* <!-- //jarallax --> */}

      <Script
        id="test"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
      />
      {/* <!-- start-smooth-scrolling --> */}
      {/* <Script id="test" type="text/javascript" src="js/move-top.js"></Script> */}
      {/* <Script id="test" type="text/javascript" src="js/easing.js"></Script> */}
      {/* <!-- //end-smooth-scrolling --> */}
      {/* <!-- Bootstrap core JavaScript */}
      {/* <!-- Placed at the end of the document so the pages load faster --> */}
      {/* <Script id="test" src="js/bootstrap.js"></Script> */}
    </div>
  );
}
