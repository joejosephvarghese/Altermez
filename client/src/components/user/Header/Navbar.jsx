import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {jwtDecode} from "jwt-decode";
import {logout} from "../../../features/redux/slice/user/UserLoginAuthSlice";
import {clearToken} from "../../../features/redux/slice/user/TokenSlice"

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(s => s.token.token);
  const [user, setUser] = React.useState({})
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDecodingToken = (token)=>{
    if(token){
      console.log(jwtDecode(token))
      const decode = jwtDecode(token);
      setUser(decode);
    }
  }



  React.useEffect(()=>{
    console.log("got here")
    handleDecodingToken(token)
  },[])

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(()=> navigate("login") , 2000)
    dispatch(clearToken());

  };

  return (
    <nav className="w-full bg-white mb-1 mx-2 rounded hover:shadow-sm shadow-xl dark:bg-gray-800 dark:border-gray-700 py-1">
      <div className="px-3 py-3 lg:px-5 lg:pl-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="" className="flex ml-2 md:mr-24">
              <img src="" className="h-8 mr-3" alt="logo" />
              <span className="self-center text-xl font-serif sm:text-2xl whitespace-nowrap dark:text-white">
                <span className="text-sky-600"></span>
              </span>
            </Link>
          </div>
          <div className="relative ml-3">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://img.freepik.com/premium-psd/3d-rendering-profile-user-interface_453897-269.jpg"
                alt="user photo"
              />
            </button>

            {/* Dropdown content */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                role="menu"
              >
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white">{user?.name}</p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  {user?.email}
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
