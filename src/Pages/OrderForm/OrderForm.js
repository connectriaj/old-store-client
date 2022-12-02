import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../components/contexts/AuthProvider";

const OrderForm = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price } = useLoaderData();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const location = form.location.value;
    const email = form.email.value;
    const price = form.price.value;
    const year = form.year.value;
    const condition = form.condition.value;
    const message = form.message.value;
    const time = form.time.value;
    const phone = form.phone.value;

    const addProducts = {
      title: name,
      seller_name: user?.displayName,
      location,
      resale_price: price,
      years_of_use: year,
      product_condition: condition,
      seller_email: email,
      description: message,
      post_time: time,
      seller_phone: phone,
    };
    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast("Product added successfully!");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <h1 className="text-center lg:text-4xl lg:underline mt-16">
        <span className="text-primary font-bold">Please</span> fill up the form
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className="border shadow-lg p-20 my-14 lg:w-2/3 mx-auto rounded-xl"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder={user?.email}
              className="input input-bordered"
              name="email"
              readOnly
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="location"
              className="input input-bordered"
              name="location"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
              type="text"
              placeholder="purchase year"
              className="input input-bordered"
              name="year"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Condition</span>
            </label>
            <input
              type="text"
              placeholder="condition"
              className="input input-bordered"
              name="condition"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post time</span>
            </label>
            <input
              type="text"
              placeholder="enter date"
              className="input input-bordered"
              name="time"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Phone</span>
            </label>
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered"
              name="phone"
              required
            />
          </div>
        </div>
        <div className="grid mt-10">
          <textarea
            className="textarea textarea-info"
            placeholder="Product Description (optional)"
            name="message"
          ></textarea>
        </div>

        <button className="btn btn-primary w-full mt-8 text-white">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </section>
  );
};

export default OrderForm;
