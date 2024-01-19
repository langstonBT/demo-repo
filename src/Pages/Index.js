import React from "react";
import backgroundImg from "../Images/image53.png"
import { Link } from "react-router-dom";
const Index = () => {
  return(
    <div className="home-page">
      <h1 className="home-title"> You got the travel plans, we got the travel vans.
      </h1>
      <p className="home-description-p">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to="/vans" className="find-van-button">Find your van
      </Link>
    </div>
  )
}

export default Index;