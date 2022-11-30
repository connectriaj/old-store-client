import React from "react";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <Form className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold lg:mt-20 lg:mb-10">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  <small>
                    New to Old Store?{" "}
                    <Link
                      to="/signup"
                      className="label-text-alt link link-hover underline"
                    >
                      Create an account
                    </Link>
                  </small>
                </p>
              </label>
            </div>

            <div className="form-control mt-3">
              <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-info">
                Login
              </button>
            </div>
            <p className="text-center">
              <small>
                Or using Login{" "}
                <Link to="" className="underline text-red-700">
                  Google
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Login;
