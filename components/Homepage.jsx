import React from "react";
import Navbar from "./Navbar";
import { Header, HeaderImage } from '../styledComponents/Header.style';

function Homepage() {
  return <div>
    <Navbar/>
    <Header>
      <HeaderImage src ="https://res.cloudinary.com/edapp/images/v1615778858/wordpress/production/ed-app-microlearning-mobile-lms-fallback/ed-app-microlearning-mobile-lms-fallback.jpg" />
    </Header>
    <div className="intro">
      <h1>Siam Rahman EdApp Task</h1>
      <div className="homepage-info-container">
        <h2>Key Case Studies<p className="link_des">Click on the links below to view each case study.</p></h2>
        <p>All these links were created dynamically using NextJs&apos; dynamic routing. <br/> All articles are also rendered dynamically using Prismic.</p>
      </div>
      

    </div>
    
  </div>;
}

export default Homepage;
