"use client";
import React from 'react';
import "../styles/Testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = ({ testimonialsData }) => {
  const lineStyle = {
    maxWidth: '104px',
   minWidth:'45px',
   width:'100%',
    textAlign: 'left',
    marginLeft: 0,
    border: '1px solid #000', // You can customize the border style
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
     
      <section id="testimonials" style={{display:'flex',flexDirection:'column',gap:'30px',marginTop:'30px'}}>
      <div style={{display:'flex',alignItems:'center',gap:'20px',width:'100%',justifyContent:'center'}}>
            <hr style={lineStyle} />
            <h1 className='section__heading'  style={{ fontSize:'32px'}}>Testimonials</h1>
            <hr style={lineStyle} />
            </div>
        <div className="testimonial-box-container">
            {testimonialsData &&
              testimonialsData.map((data, index) => (
                <div key={index} className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img src={data.avatar} alt={`${data.name}'s avatar`} />
                      </div>
                      <div className="name-user">
                        <strong>{data.name}</strong>
                        <span>{data.position}</span>
                      </div>
                    </div>
                    <div className="reviews">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>{data.quote}</p>
                  </div>
                </div>
              ))}
          {/* </Carousel> */}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;


