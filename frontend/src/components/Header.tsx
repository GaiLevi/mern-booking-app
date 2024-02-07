import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButtom from "./SignOutButtom";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link className="mx-2 md:mx-0" to="/">
            MernHolidays.com
          </Link>
        </span>
        <span className="flex flex-col space-x-2 sm:flex-row m-2 md:m-0">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                {" "}
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                {" "}
                My Hotels
              </Link>
              <SignOutButtom />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
