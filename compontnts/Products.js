import React from "react";

export default function Products() {
  return (
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
  );
}
