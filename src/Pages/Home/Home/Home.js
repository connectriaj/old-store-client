import React from "react";
import AdCard from "../AdCard/AdCard";
import Banner from "../Banner/Banner";
import MiddleBanner from "../MiddleBanner/MiddleBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdCard></AdCard>
      <MiddleBanner></MiddleBanner>
    </div>
  );
};

export default Home;
