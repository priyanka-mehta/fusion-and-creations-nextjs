import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import GallaryComponent from "../compontnts/Gallary";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>Fusion and Creations</title>
        {/* <!-- mobile apps --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="keywords"
          content="Best Interior Designer in Gandhidham, Kutch, Gujarat"
        />
        <meta
          name="description"
          content="Fusion and Creation is leading contemporary interior design firm in gandhidham"
        />

        {/* <!-- //js --> */}
      </Head>

      <body>
        <Script id="test" src="https://smtpjs.com/v3/smtp.js" />
        {/* <Script id="test" src="js/jquery-2.2.3.min.js"></Script> */}
        {/* <!-- banner --> */}
        <div className="banner jarallax">
          <div className="banner-info">
            <div className="banner-top">
              <div className="container">
                <div className="navbar-header banner-logo">
                  <Link href="/">
                    <a>
                      <h1>
                        Fusion and Creations <span>The Designing Studio</span>
                      </h1>
                    </a>
                  </Link>
                </div>
                <div className="banner-top-right">
                  <div className="agileinfo-social-grids">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/viralimehta1994/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/fusion_and_creations/">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            {/* <!-- banner-text --> */}
            <div className="banner-text">
              {/* <!-- top-navigation --> */}
              <div className="main">
                <div className="container">
                  <nav id="menu" className="nav top-nav">
                    <button className="navtoogle">
                      <span className="icon-menu glyphicon glyphicon-menu-hamburger">
                        {" "}
                      </span>{" "}
                      Menu
                    </button>
                    <ul>
                      <li>
                        <Link href="/">
                          <a>
                            <span className="icon">
                              <i
                                aria-hidden="true"
                                className="icon-home glyphicon glyphicon-home"
                              />
                            </span>
                            <span>Home</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a href="#about" className="scroll">
                          <span className="icon">
                            <i
                              aria-hidden="true"
                              className="icon-services glyphicon glyphicon-info-sign"
                            />
                          </span>
                          <span>About</span>
                        </a>
                      </li>
                      <li>
                        <a href="#services" className="scroll">
                          <span className="icon">
                            <i
                              aria-hidden="true"
                              className="icon-portfolio glyphicon glyphicon-cog"
                            />
                          </span>
                          <span>Services</span>
                        </a>
                      </li>
                      <li>
                        <a href="#gallery" className="scroll">
                          <span className="icon">
                            <i
                              aria-hidden="true"
                              className="icon-blog glyphicon glyphicon-picture"
                            />
                          </span>
                          <span>Gallery</span>
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="scroll">
                          <span className="icon">
                            <i
                              aria-hidden="true"
                              className="icon-contact glyphicon glyphicon-envelope"
                            />
                          </span>
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <Script id="test" src="js/modernizr.custom.js"></Script> */}
                </div>
              </div>
              {/* <!-- //top-navigation --> */}
            </div>
            {/* <!-- //banner-text --> */}
            <div className="clearfix"> </div>
            <p className="w3-agilephn">
              <span className="glyphicon glyphicon-earphone" /> +91 8141310606{" "}
            </p>
          </div>
        </div>
        {/* <!-- //banner --> */}
        {/* <!-- welcome --> */}
        <div id="about" className="welcome">
          <div className="container">
            <div className="agileits-title">
              <h2>About us</h2>
              <p>
                We grow by making decisions that are rooted in business
                strategy.{" "}
              </p>
            </div>
            <div className="w3ls-row alert">
              <div className="col-md-6 welcome-w3left">
                <img
                  src="images/aboutus.jpeg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="col-md-6 welcome-w3right">
                <div className="welcome-agiletext">
                  <h4> About Fusion and Creations </h4>
                  <p className="about-font">
                    Fusion and Creation is leading contemporary interior design
                    firm in gandhidham since 2019. FUSION AND CREATION believes
                    that ant place you spend time in directly affects your
                    being. The place along with its interior affects what you
                    think, how you think, what you do, how you interact with
                    people, how motivated you are and a million other aspects of
                    your daily life.
                  </p>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* <!-- //welcome --> */}
        {/* <!-- services --> */}
        <div id="services" className="services jarallax">
          <div className="container">
            <div className="agileits-title w3title2">
              <h3>Services</h3>
              <p>
                We consult on digital strategy & craft meaningful connections
                with your customers across web, social, mobile & ecommerce.{" "}
              </p>
            </div>
            <div className="w3-services-grids">
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-user" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Consultation </h4>
                  <p>
                    We provide designs and the working drawings only to the
                    client and rest is client&apos;s responsibility.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-thumbs-up" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Lighting</h4>
                  <p>
                    Accent lighting is used to set a mood, accentuate an
                    aesthetically pleasing feature or draw attention away from
                    less attractive area.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-cog" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Accessories</h4>
                  <p>
                    This is the best way to add personality to your home.Those
                    pieces of art and different accessories are reflection of
                    your true taste.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Any time available</h4>
                  <p>
                    If you need any urgency then contact us anytime. We are
                    always happy to help you.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-trophy" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Perfect Development Within Time Limit</h4>
                  <p>
                    From initial concept through to design, installation and
                    completion. Timely completion of the project is our main
                    goal{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-check-square-o" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Fabrication </h4>
                  <p>
                    Standard and custom design-fabrication providing a complete
                    package of your needs with a focus on digital fabrication
                    methods, fabricates architectural products and furniture.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-clone" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Turnkey Solutions</h4>
                  <p>
                    We also provide Trunkey solutions which is easily developed
                    and deployed into current design
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 w3l-services-grid">
                <div className="w3ls-services-img">
                  <i className="fa fa-heart" aria-hidden="true" />
                </div>
                <div className="agileits-services-info">
                  <h4>Space Planning</h4>
                  <p>
                    We Do Planning For Home And Other Commercial Interior
                    Drawing. So That We Can Bring Creativity Along With
                    Innovation In Your Space
                  </p>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/* <!-- products --> */}
        <div className="products jarallax">
          <div className="container">
            <div className="products-w3ls-row">
              <div className="dark-area">
                {/* <!-- some colors --> */}
                <div className="col-xs-3 col-md-3 products-grids">
                  <div id="lightcircle" className="c100 p60 dark">
                    <span>100%</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <h5> Innovate </h5>
                </div>
                <div className="col-xs-3 col-md-3 products-grids">
                  <div id="dgreencircle" className="c100 p60 dark blue">
                    <span>100%</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <h5>Qualities</h5>
                </div>
                <div className="col-xs-3 col-md-3 products-grids">
                  <div id="sacircle" className="c100 p60 dark pink">
                    <span>100%</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <h5> Analytics</h5>
                </div>
                <div className="col-xs-3 col-md-3 products-grids">
                  <div id="sacircle1" className="c100 p60 dark green">
                    <span>100%</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                  <h5> Strategy </h5>
                </div>
              </div>
              <div className="clearfix"> </div>
              {/* <!-- //some colors --> */}
              {/* </div><!-- //dark-area --> */}
              {/* <Script id="test" type="text/javascript" src="js/percircle.js"></Script> */}
            </div>
          </div>
        </div>
        {/* <!-- //products --> */}
        {/* <!-- gallery --> */}
        <GallaryComponent />
        {/* <!-- //gallery --> */}
        {/* <!-- feedback --> */}
        <div className="feedback jarallax">
          <div className="feedback-agileinfo">
            <div className="container">
              <div className="agileits-title w3title2">
                <h3>Feedback</h3>
                <p>What people feel for us</p>
              </div>
              <div className="agileits-feedback-grids">
                <div className="col-sm-4 feedback-info">
                  <div className="feedback-top">
                    <p>
                      {" "}Great Mixture of Art and Creativity. Wish you touch
                      the sky soon. Best Interior Designer ever met. All the
                      best for your future projects.
                    </p>
                  </div>
                  <div className="feedback-grids">
                    <div className="feedback-img">
                      <img
                        src="images/feedback/the_magical_touch.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="feedback-img-info">
                      <h5>The Magical Touch</h5>
                      <p>Gandhidham</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
                <div className="col-sm-4 feedback-info">
                  <div className="feedback-top">
                    <p>
                      {" "}Very dedicated and creative team to work with.
                      Adorable designs and presence of mind to pick up new idea.{" "}
                    </p>
                  </div>
                  <div className="feedback-grids">
                    <div className="feedback-img">
                      <img src="images/feedback/nilesh_sheth.jpeg" alt="" />
                    </div>
                    <div className="feedback-img-info">
                      <h5>Nilesh Sheth</h5>
                      <p>Gandhidham</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
                <div className="col-sm-4 feedback-info">
                  <div className="feedback-top">
                    <p>
                      Amazing and talented designer in the town. Love her color
                      sense, use of any material and her perspective is just
                      beyond words.{" "}
                    </p>
                  </div>
                  <div className="feedback-grids">
                    <div className="feedback-img">
                      <img src="images/feedback/user.jpeg" alt="" />
                    </div>
                    <div className="feedback-img-info">
                      <h5>Priya Agarwal</h5>
                      <p>Gandhidham</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //feedback --> */}
        {/* <!-- contact --> */}
        <div id="contact" className="contact">
          <div className="container">
            <div className="agileits-title">
              <h3>Contact Us</h3>
              <p>
                How we can help you. We like to talk and on the strength of that
                you are invited for a coffee at our office.
              </p>
            </div>
            <div className="contact-info">
              <div className="col-md-4 contact-grids">
                <div className="cnt-address">
                  <h3>Address</h3>
                  <h4>D-105/106, 1st Floor</h4>
                  <p>
                    B.B.Z. S-51, Zanda Chowk,
                    <span className="w3ls-text">CG 09-123</span>
                    Gandhidham - Kutch (370201)
                  </p>
                  <h4>Get In Touch</h4>
                  <p>
                    Mobile: 8141310606
                    {/* <!-- Fax: +122 234 567 1111 --> */}
                    <span>
                      E-mail:{" "}
                      <a href="mailto:viralimehta61@gmail.com">
                        viralimehta61@gmail.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-8 contact-grids">
                <h4 className="cnt-text">How to reach us</h4>
                <p>
                  If you have any questions or would like to schedule a meet,
                  please feel free to mail us with this form and we will get
                  back to you soon.
                </p>
                <div className="contact-form">
                  <h3>Drop Us a Message</h3>
                  <form method="post">
                    <textarea
                      placeholder="Message"
                      required=""
                      aria-label="message"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      required=""
                      id="name"
                      aria-label="name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required=""
                      id="email"
                      aria-label="email"
                    />
                    <input type="button" value="SEND" onClick="sendEmail()" />
                  </form>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="map">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14683.100380408854!2d70.1393281!3d23.0687056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a9ad61bb0dd1414!2sFusion%20And%20Creations!5e0!3m2!1sen!2sin!4v1583262845588!5m2!1sen!2sin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* <!-- //contact --> */}

        {/* <!-- footer --> */}
        <div className="w3l-footer">
          <div className="container">
            <div className="copyright-agile">
              <p>
                Our team takes over everything, from an idea and concept
                development to realization. We believe in traditions and
                incorporate them within our innovations. Client is the soul of
                the project.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- //footer --> */}

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
      </body>
    </html>
  );
}
