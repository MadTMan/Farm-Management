import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userReducer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [cUser, setCUser] = useState({});
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/user/${user.user._id}`
        );
        setCUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Dashboard</a>
      </div>
      
      {/* <div className='flex-none gap-2'> */}
        {/* <div>
          <Link to={"/addcrop"}>
            <span>Add Crop</span>
          </Link>
        </div>
        <div>
          <Link to={"/addlive"}>
            <span>Add Live</span>
          </Link>
        </div> */}
        
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={`${cUser.img}`} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={`/profile/${cUser._id}`}>
                <a className='justify-between'>
                  {`${cUser.username}`}
                  <span className='badge'>Profile</span>
                </a>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <span onClick={logoutHandler}>
                <a>Logout</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
