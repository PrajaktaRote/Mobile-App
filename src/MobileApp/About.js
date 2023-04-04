import React from 'react';

const About = (props) => {
return (
    <div>
        <div className="bg-light border border-dark shadow-lg ps-4">
      <div className="container">
        <div className="row h-1 align-items-center">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <br />
              <h2 className="font-weight-bold mt-5 mb-4">
                <centre>
                  <i>ABOUT US</i>
                </centre>
              </h2>
              <hr />
              <p className="font-italic text-muted mb-4">
                {" "}
                <b>WHAT WE’RE ABOUT Mobile</b>
                <br />
                
              </p>

              <p className="font-italic text-muted mb-4">
                {/* {" "}
                <b>OUR MISSION</b> 
                <br /> */}
                Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on mobile app. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs
              </p>
              {/* <p className="font-italic text-muted mb-4">
                {" "}
                <b>OUR VISION</b>
                <br />
                                

                <br></br>

                               
                
                <br></br>

                                
              </p> */}
              <a href="#" className="btn btn-secondary px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="" alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
)
};
export default About;