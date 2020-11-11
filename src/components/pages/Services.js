import React , { useState, useRef } from 'react'
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// Redux Actions
import { changeServiceType } from "../../redux/actions/services";

// Services components
import Development from "./services/Development"
import Design from "./services/Design"
import Cms from "./services/Cms"
import { Switch } from 'react-router';



const Services = ({serviceType , changeServiceType}) => {
  // Declared serviceDisplay as new ref
  const serviceDisplay = useRef(null);

  const changeService = (e) => {
    var type = e.target.value;
    // Pass the button's value to the redux function - set's the service state as the value
    changeServiceType(type)
    // Used ref to scroll ref (div) into view when the service has been chosen
    serviceDisplay.current.scrollIntoView({ 
      behavior: "smooth", 
      block: "nearest"
   })
  }

    // Depending on what service is set into state assign the active button class to the services buttons
    switch (serviceType.type) {
      case "development" :
              var develop =  "active-service";
              break;
      case "design" :
              var design =  "active-service";
              break;
      case "cms" :
              var cms =  "active-service";
              break;
    }
  
  return (
   <div className="services-container">
         <div className="yellow-background">
        <img src="/assets/illustrations/page-background-yellow.svg" alt="Background Bubble Yellow"/>
      </div>
      <div className="red-background">
        <img src="/assets/illustrations/page-background-red.svg" alt="Background Bubble Red"/>
      </div>
  <h4 className="page-title">My Services</h4>
      <div className="services-info-grid">
        <div className="info-con">
          <img src="/assets/illustrations/development.svg" alt="Development Illustration"/>
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button value="development" id="development-btn" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
        <div className="info-con">
          <img src="/assets/illustrations/design.svg" alt="Design Illustration"/>
          <h4>Design</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button  value="design" id="design-btn" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
        <div className="info-con">
          <img src="/assets/illustrations/cms.svg" alt="CMS Illustration"/>
          <h4>CMS</h4>
          <p>Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac </p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button value="cms" id="cms-btn" onClick={(e) => changeService(e)}>Learn More</button>
        </div>
      </div>
      <div className="service-button-con">
        <button 
          className={develop} 
          value="development" 
          onClick={(e) => changeService(e)}>Development</button>
        <button
         className={design} 
         value="design" 
         onClick={(e) => changeService(e)}>Design</button>
        <button
        className={cms} 
         value="cms" 
         onClick={(e) => changeService(e)}>CMS</button>
      </div>
      {serviceType.type === "development" && <Development />}
      {serviceType.type === "design" && <Design />}
      {serviceType.type === "cms" && <Cms />}
     <div class="scroll-ref" ref={serviceDisplay}></div>
   </div>
  )
}

Services.propTypes = {
  service : PropTypes.string.isRequired,
}

const mapStateToProps =  (state) => ({
  serviceType : state.service,
})

export default connect(mapStateToProps, {changeServiceType})(Services);