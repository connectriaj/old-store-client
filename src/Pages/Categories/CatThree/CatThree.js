import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";

const CatThree = () => {
  const categoryThree = useLoaderData();
  const [booking, setBooking] = useState(null);

  return (
    <section className="mt-20">
      <div className="grid gap-12 lg:grid-cols-3 ">
        {categoryThree.map((category) => (
          <div key={category._id} category={category} setBooking={setBooking}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={category.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{category.title}</h2>
                <p>{category.description}</p>
                <p className="mt-3">Location: {category.location}</p>
                <p>Resell Price: {category.resale_price} BDT</p>
                <p>Original Price: {category.original_price} BDT</p>
                <p>Years of uses: {category.years_of_use}</p>
                <p>Post time: {category.post_time}</p>
                <p>Seller Name: {category.seller_name}</p>
                <div className="card-actions justify-start mt-10">
                  {/* The button to open modal */}
                  <label
                    onClick={() => setBooking(category)}
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

export default CatThree;
