"use client"

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const HeroSection = () => {
  return (
    <>
            <div>
              <Carousel>
                  <div>
                      <img src="/hero-1.jpeg" alt="image1"/>
                      <p className="legend">Schedule Video Calls from anywhere in the earth</p>
  
                  </div>
                  <div>
                      <img src="/hero-2.jpg" alt="image2" />
                      <p className="legend">Event Hosting Facilities Available</p>
  
                  </div>
                  <div>
                      <img src="/hero-3.jpg" alt="image3"/>
                      <p className="legend">ChatRoom facilities in both mobile and PC</p>
  
                  </div>
              </Carousel>
            </div>
    </>
  );
}

export default HeroSection