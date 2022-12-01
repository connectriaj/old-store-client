import React from "react";

const OrderForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const location = form.location.value;
    const category = form.category.value;
    const year = form.year.value;
    const condition = form.condition.value;
  };

  return (
    <div>
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
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="category"
              className="input input-bordered"
              name="category"
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
        </div>
        <div className="grid mt-10">
          <textarea
            className="textarea textarea-info"
            placeholder="Product Description (optional)"
          ></textarea>
        </div>

        <button className="btn btn-primary w-full mt-8 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
