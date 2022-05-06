import React, { Component } from "react";
import "./style.css";
import Navbar from "../Components/Navbar/navbar";
import Catches from "../Components/Catches/catches";
import CatchInsights from "../Components/Catches/CatchInsights/catchInsights";

export default class Home extends Component {  
  constructor(props){ 
    super(props) 
    // Set initial state 
    this.state =
    {
      appNav: "catches",
      catchId: 5
    }
    // Binding this keyword 
    this.updateAppNav = this.updateAppNav.bind(this) 
    this.updateCatchId = this.updateCatchId.bind(this) 
  } 
  updateAppNav = (newtext) => {
    this.setState({ appNav: newtext });
  }
  updateCatchId = (newCatchId) => {
    this.setState({ catchId: newCatchId });
  }

  render() {
    return (
      <div>
        <Navbar updateAppNav={this.updateAppNav}/>
        {this.state.appNav === "catches" && <Catches key="1" updateAppNav={this.updateAppNav} updateCatchId={this.updateCatchId}/>}
        {this.state.appNav === "catchInsights" && this.state.catchId > 0 && <CatchInsights key="2" updateAppNav={this.updateAppNav} catchId={this.state.catchId}/>}
      </div >
    );
  }
}
