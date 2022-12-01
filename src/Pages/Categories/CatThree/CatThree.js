import React from "react";
import { useLoaderData } from "react-router-dom";

const CatThree = () => {
  const categoryThree = useLoaderData();

  return (
    <section className="mt-20">
      <div className="grid gap-12 lg:grid-cols-3 ">
        {categoryThree.map((category) => (
          <div key={category._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={category.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.title}</h2>
                <p>{category.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatThree;
