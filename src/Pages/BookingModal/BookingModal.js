import React, { useContext } from "react";
import { AuthContext } from "../../components/contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-router-dom";

const BookingModal = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const { title, resale_price } = booking;

  const diffToast = () => {
    toast("The item is Booked!");
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

          <Form>
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
                className="input input-bordered "
                required
              />
            </div>
            <button
              onClick={diffToast}
              className="btn btn-primary text-white w-full my-2"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
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
