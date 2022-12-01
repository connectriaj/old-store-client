import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    form.reset();
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleLogin} className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl text-xl font-bold lg:mt-20 lg:mb-10">
            Please Login
          </h1>
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

              <p className="text-center">
                <small className="text-red-600">{error}</small>
              </p>
              <label className="label">
                <p className="mt-3">
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

export default Login;
