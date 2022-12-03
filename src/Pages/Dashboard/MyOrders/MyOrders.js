import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../components/contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [productDelete, setProductDelete] = useState([]);

  const url = `https://old-store-server.vercel.app/orders?email=${user.email}`;
  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this item?"
    );
    if (proceed) {
      fetch(`https://old-store-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Deleted Successfully!");
            const remaining = orders.filter((order) => order._id !== id);
            setProductDelete(remaining);
          }
        });
    }
  };
  return (
    <section>
      <h3 className="text-3xl mb-10 mt-10">My Orders</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>{order.title}</td>
                <td>{order?.date}</td>
                <td>{order.price} BDT</td>
                <button onClick={() => handleDelete(order._id)}>
                  <td className="font-bold text-red-700">Delete</td>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default MyOrders;
