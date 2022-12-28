import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero banner-img flex justify-between py-6 lg:py-28 lg:px-12">
      <div className="hero-content flex-col lg:flex-row lg:gap-48">
        <div>
          <img
            src={banner}
            className="rounded-lg bg-base-100  lg:w-[900px]"
            alt="img"
          />
        </div>
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold">
            Want to sell your old phone?
          </h1>
          <p className="py-6">
            We've all had an old phone that served us well but we no longer
            need. Luckily, the Internet exists. Here are the best places online
            to compare mobile prices and sell your old or unwanted smartphone to
            someone who wants it
          </p>
          <Link to='/products'><button className="btn btn-primary text-white bg-gradient-to-r from-primary to-info">
            Explore Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
