import React, { useContext } from "react";
import { AuthContext } from "../../components/contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    resale_price,
    seller_name,
    seller_phone,
    description,
    product_condition,
    years_of_use,
    post_time,
  } = booking;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const location = form.location.value;

    console.log(phone, location);

    const order = {
      phone,
      location,
      id: _id,
      title: title,
      price: resale_price,
      years_of_use: years_of_use,
      name: seller_name,
      contact: seller_phone,
      email: user.email,
      date: post_time,
      description: description,
      product_condition: product_condition,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    toast("This item is Booked!");

    form.reset();
  };

  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold"> {user?.displayName}</h3>
          <p>{user?.email}</p>
          <p className="text-2xl mt-3 mb-2">{title}</p>
          <h5>
            Price: <span className="text-green-600">{resale_price}</span> BDT
          </h5>

          <form onSubmit={handleSubmit}>
            {/* phone number form  */}
            <div className="form-control py-4">
              <label className="label">
                <span className="label-text">
                  Enter your phone number please!
                </span>
              </label>
              <input
                type="phone"
                placeholder="Phone"
                className="input input-bordered "
                name="phone"
                required
              />
            </div>

            {/* location input form  */}
            <div className="form-control pb-4">
              <label className="label">
                <span className="label-text">Enter your location please!</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                name="location"
                required
              />
            </div>
            {user.email ? (
              <button className="btn btn-primary text-white w-full my-2">
                Submit
              </button>
            ) : (
              <button className="btn btn-primary text-white w-full my-2 disabled">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
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

export default BookingModal;
