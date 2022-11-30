import React from "react";

const MiddleBanner = () => {
  return (
    <section>
      <div className="card lg:card-side shadow-lg p-10">
        <div>
          <figure className="lg:w-2/3">
            <img
              className=" rounded-2xl hidden lg:block"
              src="https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="Album"
            />
          </figure>
        </div>
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-3xl lg:mb-5 text-purple-700">
            Your Phone Your Choice!
          </h2>
          <p>
            The industry standard way of representing display sizes is
            publishing their diagonal length in inches. The screen-to-body ratio
            is a measure which relates to the size of the screen bezels. The
            bigger the ratio, the smaller the bezels are, meaning the display
            takes up a larger area on the device's front. Lists the weight of
            the phone in grams. Sometimes the manufactures don't list the weight
            before the handset becomes available. As usual we try and update the
            field as frequently as needed.
          </p>
          <button className="btn btn-primary text-white">Show More</button>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;
