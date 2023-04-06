import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {user, logIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen sm:h-full md:h-full">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          alt="banner"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen md:h-full sm:h-full"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? (
                <p className="bg-red-500 p-3 my-3">
                  Invalid username or password
                </p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className=" py-4 w-full flex-col flex"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className=" rounded- font-bold bg-red-600 py-3 my-6 hover:bg-red-800">
                  Sign In
                </button>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" name="" id="" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="text-gray-600 text-sm py-8 ">
                  New to to Netflix{" "}
                  <Link to="/signup">
                    <span className="text-white">Sign Up</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
