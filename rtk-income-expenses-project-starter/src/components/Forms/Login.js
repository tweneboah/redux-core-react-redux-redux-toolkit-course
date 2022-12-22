import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //---Destructuring---
  const { email, password } = formData;
  //---onchange handler----
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //---onsubmit handler----
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section className="relative py-16 bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-96 bg-gray-100" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-xl mx-auto py-10 px-8 sm:px-20 bg-white rounded-md">
            <div className="mb-6">
              <h4 className="max-w-xs font-heading text-3xl sm:text-4xl mt-2">
                Login
              </h4>
            </div>
            <form action>
              <div className="mb-4">
                <label className="block text-sm leading-6 mb-2" htmlFor>
                  E-mail address
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={onChangeHandler}
                  className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none"
                  type="email"
                  placeholder="Type e-mail"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm leading-6 mb-2" htmlFor>
                  Password
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                  className="block w-full p-4 font-heading text-gray-300 placeholder-gray-300 bg-gray-50 rounded outline-none"
                  type="password"
                  placeholder="Type password"
                />
              </div>
              <div className="text-right mb-6">
                <button
                  className="block w-full py-4 px-6 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <Link
                className="block text-indigo-500 font-heading text-center hover:underline mb-6"
                to="/register"
              >
                Register Instead
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
