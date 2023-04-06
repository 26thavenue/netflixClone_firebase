import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white flex w-full items-center justify-between p-4 z-10 absolute">
      <Link to="/">
        <h1 className="text-4xl text-red-600 cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="account">
            <button className="text-white pr-4 cursor-pointer ">Account</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 cursor-pointer rounded text-white hover:bg-gray-300 hover:text-black ml-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer ">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 cursor-pointer rounded text-white hover:bg-gray-300 hover:text-black ml-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
