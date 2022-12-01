import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="lg:mt-28 mt-10 mb-10 lg:mb-0">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-3xl lg:mb-4">iphone collection</h2>
            <p>
              Explore the long line of iPhones through the years, including the
              leaps and changes between models, as well as predictions on what
              is to come.
            </p>
            <div className="card-actions justify-start">
              <Link to="/cat1">
                <button className="btn btn-primary capitalize">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-3xl lg:mb-4">Samsung Phone</h2>
            <p>
              Explore the long line of iPhones through the years, including the
              leaps and changes between models, as well as predictions on what
              is to come.
            </p>
            <div className="card-actions justify-start">
              <Link to="/cat2">
                <button className="btn btn-primary capitalize">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title lg:text-3xl lg:mb-4">Oppo Phone</h2>
            <p>
              Explore the long line of iPhones through the years, including the
              leaps and changes between models, as well as predictions on what
              is to come.
            </p>
            <div className="card-actions justify-start">
              <Link to="/cat3">
                <button className="btn btn-primary capitalize">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
