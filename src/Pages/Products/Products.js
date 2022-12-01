import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const Products = () => {
  const products = useLoaderData();
  const [booking, setBooking] = useState(null);

  return (
    <section className="mt-20">
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 ">
        {products.map((product) => (
          <div key={product._id} product={product} setBooking={setBooking}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <p className="mt-3">Location: {product.location}</p>
                <p>Resell Price: {product.resale_price} BDT</p>
                <p>Original Price: {product.original_price} BDT</p>
                <p>Years of uses: {product.years_of_use}</p>
                <p>Post time: {product.post_time}</p>
                <p>Seller Name: {product.seller_name}</p>
                <div className="card-actions justify-start mt-10">
                  {/* The button to open modal */}
                  <label
                    onClick={() => setBooking(product)}
                    htmlFor="booking-modal"
                    className="btn btn-primary  text-white"
                  >
                    Buy Now
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {booking && <BookingModal booking={booking}></BookingModal>}
    </section>
  );
};

export default Products;
