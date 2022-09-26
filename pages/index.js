import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <html lang="en">
    
    <Head>
      <title>Fusion and Creations</title>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      {/* <script type="text/javascript">
        function sendEmail() {
          var link = "mailto:priyankamehta929@gamil.com"
            + "?cc=viralimehta61@gmail.com"
            + "&subject=" + encodeURIComponent("This is my subject")
            + "&body=" + encodeURIComponent(document.getElementById('name').value);
    
          window.location.href = link;
        }
      </script> */}
      {/* <!-- mobile apps --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="keywords" content="Best Interior Designer in Gandhidham, Kutch, Gujarat"/>
      <meta name="description" content="Fusion and Creation is leading contemporary interior design firm in gandhidham"/>
      {/* <script
        type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script> */}
      {/* <!-- //mobile apps --> */}
      <link href="css/bootstrap.css" type="text/css" rel="stylesheet" media="all"/>
      <link href="css/style.css" type="text/css" rel="stylesheet" media="all"/>
      <link href="css/font-awesome.css" rel="stylesheet"/> {/*<!-- font-awesome icons --> */}
      <link href="css/percircle.css" rel="stylesheet"/>
      {/* <!-- //Custom Theme files --> */}
      {/* <!-- js --> */}
      <script src="js/jquery-2.2.3.min.js"></script>
      {/* <!-- //js --> */}
      {/* <!-- web-fonts --> */}
      <link href='https://fonts.googleapis.com/css?family=Buda:300&display=swap' rel='stylesheet' type='text/css'/>
      <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic,700,700italic&display=swap'
        rel='stylesheet' type='text/css'/>
      {/* <!-- //web-fonts --> */}
    </Head>
    
    <body>
      {/* <!-- banner --> */}
      <div class="banner jarallax">
        <div class="banner-info">
          <div class="banner-top">
            <div class="container">
              <div class="navbar-header banner-logo">
                <a href="index.html">
                  <h1>Fusion and Creations <span>The Designing Studio</span></h1>
                </a>
              </div>
              <div class="banner-top-right">
                <div class="agileinfo-social-grids">
                  <ul>
                    <li><a href="https://www.facebook.com/viralimehta1994/"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/fusion_and_creations/"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
          {/* <!-- banner-text --> */}
          <div class="banner-text">
            {/* <!-- top-navigation --> */}
            <div class="main">
              <div class="container">
                <nav id="menu" class="nav top-nav">
                  <button class="navtoogle">
                    <span class="icon-menu glyphicon glyphicon-menu-hamburger"> </span> Menu
                  </button>
                  <ul>
                    <li>
                      <a href="index.html">
                        <span class="icon">
                          <i aria-hidden="true" class="icon-home glyphicon glyphicon-home"></i>
                        </span>
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#about" class="scroll">
                        <span class="icon">
                          <i aria-hidden="true" class="icon-services glyphicon glyphicon-info-sign"></i>
                        </span>
                        <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a href="#services" class="scroll">
                        <span class="icon">
                          <i aria-hidden="true" class="icon-portfolio glyphicon glyphicon-cog"></i>
                        </span>
                        <span>Services</span>
                      </a>
                    </li>
                    <li>
                      <a href="#gallery" class="scroll">
                        <span class="icon">
                          <i aria-hidden="true" class="icon-blog glyphicon glyphicon-picture"></i>
                        </span>
                        <span>Gallery</span>
                      </a>
                    </li>
                    <li>
                      <a href="#contact" class="scroll">
                        <span class="icon">
                          <i aria-hidden="true" class="icon-contact glyphicon glyphicon-envelope"></i>
                        </span>
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <script src="js/modernizr.custom.js"></script>
              </div>
            </div>
            {/* <!-- //top-navigation --> */}
          </div>
          {/* <!-- //banner-text --> */}
          <div class="clearfix"> </div>
          <p class="w3-agilephn"><span class="glyphicon glyphicon-earphone"></span> +91 8141310606 </p>
        </div>
      </div>
      {/* <!-- //banner --> */}
      {/* <!-- welcome --> */}
      <div id="about" class="welcome">
        <div class="container">
          <div class="agileits-title">
            <h2>About us</h2>
            <p>We grow by making decisions that are rooted in business strategy. </p>
          </div>
          <div class="w3ls-row alert">
            <div class="col-md-6 welcome-w3left">
              <img src="images/aboutus.jpeg" class="img-responsive" alt="" />
            </div>
            <div class="col-md-6 welcome-w3right">
              <div class="welcome-agiletext">
                <h4> About Fusion and Creations </h4>
                <p class="about-font">Fusion and Creation is leading contemporary interior design firm in gandhidham since
                  2019.
                  FUSION AND CREATION believes that ant place you spend time in directly
                  affects your
                  being. The place along with its interior affects what you think, how you think, what you do,
                  how you
                  interact with people, how motivated you are and a million other aspects of your daily life.
                </p>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //welcome --> */}
      {/* <!-- services --> */}
      <div id="services" class="services jarallax">
        <div class="container">
          <div class="agileits-title w3title2">
            <h3>Services</h3>
            <p>We consult on digital strategy & craft meaningful connections with your customers across web, social,
              mobile
              & ecommerce. </p>
          </div>
          <div class="w3-services-grids">
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Consultation </h4>
                <p>We provide designs and the working drawings only to the client and rest is client's
                  responsibility.</p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Lighting</h4>
                <p>Accent lighting is used to set a mood, accentuate an aesthetically pleasing feature or draw
                  attention
                  away from less attractive area.</p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-cog" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Accessories</h4>
                <p>This is the best way to add personality to your home.Those pieces of art and different
                  accessories are
                  reflection of your true taste.</p>
    
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Any time available</h4>
                <p>If you need any urgency then contact us anytime. We are always happy to help you.</p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-trophy" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Perfect Development Within Time Limit</h4>
                <p>From initial concept through to design, installation and completion. Timely completion of the
                  project is
                  our main goal </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Fabrication </h4>
                <p>Standard and custom design-fabrication providing a complete package of your needs with a
                  focus on digital
                  fabrication methods, fabricates architectural products and furniture. </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-clone" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Turnkey Solutions</h4>
                <p>We also provide Trunkey solutions which is easily developed and deployed into current design
                </p>
              </div>
            </div>
            <div class="col-md-3 col-xs-6 w3l-services-grid">
              <div class="w3ls-services-img">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
              <div class="agileits-services-info">
                <h4>Space Planning</h4>
                <p>We Do Planning For Home And Other Commercial Interior Drawing. So That We Can Bring Creativity Along With
                  Innovation In Your Space</p>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- products --> */}
      <div class="products jarallax">
        <div class="container">
          <div class="products-w3ls-row">
            <div class="dark-area">
              {/* <!-- some colors --> */}
              <div class="col-xs-3 col-md-3 products-grids">
                <div id="lightcircle" class="c100 p60 dark">
                  <span>100%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <h5> Innovate </h5>
              </div>
              <div class="col-xs-3 col-md-3 products-grids">
                <div id="dgreencircle" class="c100 p60 dark blue">
                  <span>100%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <h5>Qualities</h5>
              </div>
              <div class="col-xs-3 col-md-3 products-grids">
                <div id="sacircle" class="c100 p60 dark pink">
                  <span>100%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <h5> Analytics</h5>
              </div>
              <div class="col-xs-3 col-md-3 products-grids">
                <div id="sacircle1" class="c100 p60 dark green">
                  <span>100%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
                <h5> Strategy </h5>
              </div>
            </div>
            <div class="clearfix"> </div>
              {/* <!-- //some colors --> */}
            {/* </div><!-- //dark-area --> */}
            <script type="text/javascript" src="js/percircle.js"></script>
          </div>
        </div>
      </div>
      {/* <!-- //products --> */}
      {/* <!-- gallery --> */}
      <div id="gallery" class="gallery">
        <div class="container">
          <div class="agileits-title">
            <h3>Our Gallery</h3>
            <ul class="nav nav-tabs">
              {/* <li class="active"><a href="#home-gallary">Residence</a></li>
              <li><a href="#office-gallary">Office</a></li>
              <li><a href="#saloon-gallary">Saloon</a></li>
              <li><a href="#restaurant-gallary">Restaurant</a></li> */}
            </ul>
          </div>
          <div id="jzBox" class="jzBox">
            <div id="jzBoxNextBig"></div>
            <div id="jzBoxPrevBig"></div>
            <img src="#" id="jzBoxTargetImg" alt=""/>
            <div id="jzBoxBottom">
              <div id="jzBoxTitle"></div>
              <div id="jzBoxCounter"></div>
              <span id="jzBoxMoreItems">
                <i class="glyphicon glyphicon-menu-left" id="jzBoxPrev"></i> &nbsp;
                <i class="glyphicon glyphicon-menu-right" id="jzBoxNext"></i> &nbsp;
              </span>
              <i class="glyphicon glyphicon-remove-circle" id="jzBoxClose"></i>
            </div>
          </div>
          <div class="tab-content">
            <img src="images/coming_soon.jpg" class="img-responsive" alt=""/>
            {/* <div id="home-gallary" class="gallery-grids-row tab-pane fade in active">
              <div class="col-sm-4 col-xs-4 gallery-grid" id="home1">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/home/ashok_vora/1.jpg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Mr.Ashok Vora's Home</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-4 gallery-grid" id="home2">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/home/suresh_sorathiya/1.jpg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Mr.Suresh Sorathiya's Home</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-4 col-xs-4 gallery-grid" id="home3">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/home/madhukant_shah/1.jpeg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Mr.Madhukant Shah's Home</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="home1Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/1.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/1.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/2.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/2.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/3.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/3.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/4.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/4.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/5.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/5.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/6.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/6.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/7.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/7.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/8.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/8.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/9.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/9.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/10.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/10.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/11.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/11.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/12.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/12.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/18.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/18.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/13.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/13.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/14.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/14.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/15.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/15.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/16.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/16.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/ashok_vora/17.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/ashok_vora/17.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
    
                </div>
              </div>
              <div id="home2Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/1.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/1.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/2.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/2.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/3.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/3.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/4.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/4.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/5.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/5.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/6.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/6.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/7.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/7.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/8.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/8.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/9.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/9.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/10.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/10.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/11.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/11.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/12.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/12.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/13.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/13.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/14.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/14.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/15.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/15.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/16.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/16.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/17.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/17.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/suresh_sorathiya/18.jpg" class="jzBoxLink item-hover">
                      <img src="images/home/suresh_sorathiya/18.jpg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div id="home3Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/1.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/1.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/2.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/2.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/3.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/3.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/4.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/4.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/5.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/5.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/6.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/6.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/7.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/7.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/8.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/8.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/9.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/9.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/10.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/10.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/11.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/11.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/12.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/12.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/13.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/13.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/14.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/14.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/15.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/15.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/16.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/16.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/17.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/17.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/18.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/18.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/19.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/19.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/20.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/20.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/21.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/21.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/22.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/22.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/23.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/23.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/24.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/24.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/25.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/25.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/26.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/26.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/27.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/27.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/28.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/28.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/29.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/29.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/home/madhukant_shah/30.jpeg" class="jzBoxLink item-hover">
                      <img src="images/home/madhukant_shah/30.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div id="office-gallary" class="gallery-grids-row tab-pane fade">
              <div class="col-sm-4 col-xs-4 gallery-grid" id="office1">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/office/virali_mehta/1.jpeg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Virali Mehta's Office</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="office1Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/office/virali_mehta/1.jpeg" class="jzBoxLink item-hover">
                      <img src="images/office/virali_mehta/1.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/office/virali_mehta/2.jpeg" class="jzBoxLink item-hover">
                      <img src="images/office/virali_mehta/2.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/office/virali_mehta/3.jpeg" class="jzBoxLink item-hover">
                      <img src="images/office/virali_mehta/3.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/office/virali_mehta/4.jpeg" class="jzBoxLink item-hover">
                      <img src="images/office/virali_mehta/4.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/office/virali_mehta/5.jpeg" class="jzBoxLink item-hover">
                      <img src="images/office/virali_mehta/5.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
            <div id="saloon-gallary" class="gallery-grids-row tab-pane fade">
              <div class="col-sm-4 col-xs-4 gallery-grid" id="saloon1">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/saloon/rakhi_shah/1.jpeg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Rakhi Shah's Saloon</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="saloon1Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/1.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/1.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/2.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/2.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
    
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/4.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/4.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/3.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/3.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/5.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/5.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/saloon/rakhi_shah/6.jpeg" class="jzBoxLink item-hover">
                      <img src="images/saloon/rakhi_shah/6.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="restaurant-gallary" class="gallery-grids-row tab-pane fade">
              <div class="col-sm-4 col-xs-4 gallery-grid" id="restaurant1">
                <div class="wpf-demo-4">
                  <a class="item-hover">
                    <img src="images/restaurant/tulsi_restaurant/1.jpeg" class="img-responsive" alt=""/>
                    <div class="view-caption">
                      <p>Tulsi Restaurant</p>
                    </div>
                  </a>
                </div>
              </div>
              <div id="restaurant1Detail">
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/1.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/1.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/2.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/2.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/3.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/3.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/4.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/4.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/5.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/5.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/16.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/16.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/6.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/6.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/7.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/7.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/8.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/8.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/9.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/9.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/10.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/10.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/17.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/17.jpeg" class="img-responsive" alt=""/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 col-xs-4 gallery-grid">
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/11.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/11.jpeg" class="img-responsive"/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/12.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/12.jpeg" class="img-responsive"/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/13.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/13.jpeg" class="img-responsive"/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/14.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/14.jpeg" class="img-responsive"/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                  <div class="wpf-demo-4">
                    <a href="images/restaurant/tulsi_restaurant/15.jpeg" class="jzBoxLink item-hover">
                      <img src="images/restaurant/tulsi_restaurant/15.jpeg" class="img-responsive"/>
                      <div class="view-caption">
                        <p>View Full</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <script src="js/jzBox.js"></script>
        </div>
      </div>
      {/* <!-- //gallery --> */}
      {/* <!-- feedback --> */}
      <div class="feedback jarallax">
        <div class="feedback-agileinfo">
          <div class="container">
            <div class="agileits-title w3title2">
              <h3>Feedback</h3>
              <p>What people feel for us</p>
            </div>
            <div class="agileits-feedback-grids">
              <div class="col-sm-4 feedback-info">
                <div class="feedback-top">
                  <p> Great Mixture of Art and Creativity. Wish you touch the sky soon. Best Interior Designer
                    ever met. All
                    the best for your future projects.</p>
                </div>
                <div class="feedback-grids">
                  <div class="feedback-img">
                    <img src="images/feedback/the_magical_touch.jpeg" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5>The Magical Touch</h5>
                    <p>Gandhidham</p>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
              <div class="col-sm-4 feedback-info">
                <div class="feedback-top">
                  <p> Very dedicated and creative team to work with. Adorable designs and presence of mind to
                    pick up new
                    idea. </p>
                </div>
                <div class="feedback-grids">
                  <div class="feedback-img">
                    <img src="images/feedback/nilesh_sheth.jpeg" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5>Nilesh Sheth</h5>
                    <p>Gandhidham</p>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
              <div class="col-sm-4 feedback-info">
                <div class="feedback-top">
                  <p>Amazing and talented designer in the town. Love her color sense, use of any material and
                    her
                    perspective is just beyond words. </p>
                </div>
                <div class="feedback-grids">
                  <div class="feedback-img">
                    <img src="images/feedback/user.jpeg" alt="" />
                  </div>
                  <div class="feedback-img-info">
                    <h5>Priya Agarwal</h5>
                    <p>Gandhidham</p>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //feedback --> */}
      {/* <!-- contact --> */}
      <div id="contact" class="contact">
        <div class="container">
          <div class="agileits-title">
            <h3>Contact Us</h3>
            <p>How we can help you. We like to talk and on the strength of that you are invited for a coffee at our
              office.
            </p>
          </div>
          <div class="contact-info">
            <div class="col-md-4 contact-grids">
              <div class="cnt-address">
                <h3>Address</h3>
                <h4>D-105/106, 1st Floor</h4>
                <p>B.B.Z. S-51, Zanda Chowk,
                  <span class="w3ls-text">CG 09-123</span>
                  Gandhidham - Kutch (370201)
                </p>
                <h4>Get In Touch</h4>
                <p>Mobile: 8141310606
                  {/* <!-- Fax: +122 234 567 1111 --> */}
                  <span>E-mail: <a href="mailto:viralimehta61@gmail.com">viralimehta61@gmail.com</a></span>
                </p>
              </div>
            </div>
            <div class="col-md-8 contact-grids">
              <h4 class="cnt-text">How to reach us</h4>
              <p>If you have any questions or would like to schedule a meet, please feel free to mail us with this
                form and
                we will get back to you soon.</p>
              <div class="contact-form">
                <h3>Drop Us a Message</h3>
                <form method="post">
                  <textarea placeholder="Message" required="" aria-label="message"></textarea>
                  <input type="text" placeholder="Name" required="" id="name" aria-label="name"/>
                  <input type="email" placeholder="Email" required="" id="email" aria-label="email"/>
                  <input type="button" value="SEND" onclick="sendEmail()"/>
                </form>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="map">
            <iframe title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14683.100380408854!2d70.1393281!3d23.0687056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a9ad61bb0dd1414!2sFusion%20And%20Creations!5e0!3m2!1sen!2sin!4v1583262845588!5m2!1sen!2sin"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
      {/* <!-- //contact --> */}
    
      {/* <!-- footer --> */}
      <div class="w3l-footer">
        <div class="container">
          <div class="copyright-agile">
            <p>Our team takes over everything, from an idea and concept development to realization. We believe in
              traditions
              and incorporate them within our innovations. Client is the soul of the project.</p>
          </div>
        </div>
      </div>
      {/* <!-- //footer --> */}
    
      {/* <!-- custom javascript start --> */}
      <script src="js/custom.js"></script>
      {/* <script>
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
      </script> */}
      {/* <!-- custom javascript end --> */}
      {/* <!-- jarallax --> */}
      <script src="js/SmoothScroll.min.js"></script>
      <script src="js/jarallax.js"></script>
    
      {/* <script type="text/javascript">
        $('.jarallax').jarallax({
          speed: 0.5,
          imgWidth: 1366,
          imgHeight: 768
        })
      </script> */}
      {/* <!-- //jarallax --> */}
    
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      {/* <!-- start-smooth-scrolling --> */}
      <script type="text/javascript" src="js/move-top.js"></script>
      <script type="text/javascript" src="js/easing.js"></script>
      <script type="text/javascript">
        {/* jQuery(document).ready(function ($) {
          $(".scroll").click(function (event) {
            event.preventDefault();
    
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
          });
        }); */}
      </script>
      {/* <!-- //end-smooth-scrolling --> */}
      {/* <!-- smooth-scrolling-of-move-up --> */}
      {/* <script type="text/javascript">
        $(document).ready(function () {
          $().UItoTop({ easingType: 'easeOutQuart' });
    
        });
      </script> */}
      {/* <!-- //smooth-scrolling-of-move-up --> */}
      {/* <!-- Bootstrap core JavaScript */}
      {/* <!-- Placed at the end of the document so the pages load faster --> */}
      <script src="js/bootstrap.js"></script>
    </body>
    </html>
)}
