import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../../components/contexts/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, googleLogin } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
    form.reset();
  };

  // google provider login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <Form onSubmit={handleRegister} className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold lg:mt-20 lg:mb-10">
            Please Register
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
                <p className="text-center">
                  <small>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover underline"
                    >
                      Please login
                    </Link>
                  </small>
                </p>
              </label>
            </div>

            <div className="form-control mt-3">
              <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-info">
                Sign Up
              </button>
            </div>
            <p className="text-center">
              <small>
                Or using signup{" "}
                <Link
                  to=""
                  onClick={handleGoogleLogin}
                  className="underline text-red-700"
                >
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

export default SignUp;
