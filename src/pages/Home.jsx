import React, { Component, useState } from "react";
import "./style.css";
import Navbar from "../Components/Navbar/navbar";
import Catches from "../Components/Catches/catches";
import CatchInsights from "../Components/Catches/CatchInsights/catchInsights";
import Conditions from "../Components/Catches/Conditions/conditions";

const Home = () => {  

  const [appNav, setAppNav] = useState('catches');
  const [catchId, setCatchId] = useState();

    return (
      <div>
        <Navbar setAppNav={setAppNav}/>
        {appNav === "catches" && <Catches key="1" setAppNav={setAppNav} setCatchId={setCatchId}/>}
        {appNav === "catchInsights" && catchId > 0 && <CatchInsights key="2" updateAppNav={setAppNav} catchId={catchId}/>}
        {appNav === "conditions" && <Conditions key="3" setAppNav={setAppNav} catchId={catchId}/>}
      </div >
    );
}
export default Home;
