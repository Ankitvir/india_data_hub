import React from "react";
import LeftList from "../components/LeftList";
import RightList from "../components/RightList";
import "../index"; // Add custom styles here

const MainPage = () => {
  return (
    <div className="main-page">
      <LeftList />
      <RightList />
    </div>
  );
};

export default MainPage;
