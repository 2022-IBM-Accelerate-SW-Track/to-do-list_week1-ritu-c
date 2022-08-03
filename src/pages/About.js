import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg"
  
export default class About extends Component {
  render() {
    return (
      // <div>
      //   <p>Design your About me page </p> 
      // </div>

      <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_pic"
                // Image goes here
                src={profile_pic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Ritu Chatterjee</div>
              <div className="brief_description">
                Upcoming junior at Carnegie Mellon University
                Information Systems Major & Computer Science Minor
              </div>
            </div>
          </div>
      </div>
      
    )
  }
}