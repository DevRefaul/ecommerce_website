import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/shopaholic.png";
import { api } from "../../Utils/Api";
import loginAnimation from "./loginAnimation.json";

const Login = () => {
  const [loginError, setLoginError] = useState("");

  // api calling function for user login

  const loginUser = (loginInfo) => {
    fetch(`${api}/loginuser?loginInfo=${loginInfo}`)
      .then((res) => res.json())
      .then((data) => data);
  };

  // login btn function
  const handleLoginUser = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email && !password) {
      document.getElementById("loginBtn").setAttribute("disabled", true);
      return setLoginError("Please Enter Valid Email and Password");
    } else {
      document.getElementById("loginBtn").removeAttribute("disabled");
      setLoginError("");
    }

    const loginInfo = { email, password };

    const loginResponse = loginUser(loginInfo);
    console.log(loginResponse);
  };

  const handleHideEmailLabel = (e) => {
    e.preventDefault();
    if (e.target.value) {
      document.getElementById("emailLabel").classList.add("hidden");
    }
  };
  const handleHidePasslLabel = (e) => {
    e.preventDefault();
    if (e.target.value) {
      document.getElementById("passLabel").classList.add("hidden");
    }
  };

  return (
    <>
      <section className="gradient-form h-full bg-white">
        <div className="container mx-auto h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-4/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img className="mx-auto w-48" src={logo} alt="logo" />
                        <h4 className="mt-6 mb-6 pb-1 text-xl font-semibold">
                          Login
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="Email"
                            onChange={handleHideEmailLabel}
                            required
                          />
                          <label
                            htmlFor="email"
                            id="emailLabel"
                            className=" pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                          >
                            Email
                          </label>
                        </div>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="password"
                            placeholder="Password"
                            onChange={handleHidePasslLabel}
                            required
                          />
                          <label
                            htmlFor="password"
                            id="passLabel"
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                          >
                            Password
                          </label>
                        </div>

                        {/* section for error message */}
                        <p className="text-red-600 my-6 font-medium">
                          {loginError ? loginError : ""}
                        </p>
                        {/* section for error message */}

                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            onClick={handleLoginUser}
                            className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-sky-400 to-cyan-300"
                            type="button"
                            id="loginBtn"
                          >
                            Log in
                          </button>
                          <p>Forgot password?</p>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link to="/signup">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex justify-center bg-[#a7e5f0] items-center rounded-b-lg lg:w-8/12 lg:rounded-r-lg lg:rounded-bl-none">
                    <div className="px-4 py-6 text-black md:mx-6 md:p-12">
                      <Lottie animationData={loginAnimation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
