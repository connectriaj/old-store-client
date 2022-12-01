import React from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();

  return (
    <section className="mt-20">
      <div className="grid gap-12 lg:grid-cols-3 ">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
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

export default Products;
