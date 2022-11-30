import React from "react";

const AdCard = () => {
  return (
    <section className="lg:mb-20">
      <div className="grid gap-10 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card  shadow-xl image-full lg:px-0 px-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Handset</h2>
            <p>
              A mobile phone is a wireless handheld device that allows users to
              make and receive calls. While the earliest generation of mobile
              phones could only make and receive calls, today's mobile phones do
              a lot more
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full lg:px-0 px-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cat Phone</h2>
            <p>
              A mobile phone is a wireless handheld device that allows users to
              make and receive calls. While the earliest generation of mobile
              phones could only make and receive calls, today's mobile phones do
              a lot more
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl image-full lg:px-0 px-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Broken Phone</h2>
            <p>
              A mobile phone is a wireless handheld device that allows users to
              make and receive calls. While the earliest generation of mobile
              phones could only make and receive calls, today's mobile phones do
              a lot more
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdCard;
