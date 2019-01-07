import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "Header">
          <div className = "Nav_Header">
            <div className = "Nav_Logo">
              <h3 className = "Logo_Text"> Start Bootstrap </h3>
            </div>
            <div className = "Nav_Links">
              <p className = "Link_Text"> SERVICES </p>
              <p className = "Link_Text"> PORTFOLIO </p>
              <p className = "Link_Text"> ABOUT </p>
              <p className = "Link_Text"> TEAM </p>
              <p className = "Link_Text"> CONTACT </p>
            </div>
          </div>
          <div className = "Content_Header">
            <div className = "Content_Welcome">
              <p className = "Welcome_Text"> Welcome To Our Studio!</p>
            </div>
            <div className = "Content_Message">
              <p className = "Message_Text"> IT"S NICE TO MEET YOU </p>
            </div>
            <div className = "Content_Button"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
