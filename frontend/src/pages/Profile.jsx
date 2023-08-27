import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let location = useLocation();
  let uid = location.pathname.split("/")[2];
  const [cUser, setCUser] = useState({});
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
  const handleEditProfile = (uid) => {
    if (location.search || location.hash) {
      navigate(location.pathname, { replace: true });
    }
    navigate(`/update/profile/${uid}`);
  };
  const changeProPicHandler = (e) => {
    e.preventDefault();
    navigate(`/update/profile/pic/${user.user._id}`);
  };
  console.log(cUser);
  return (
    <div className='card card-side bg-base-100 shadow-xl'>
      <figure>
        <img src={`../../public/${cUser.img}`} alt='User' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>I am {`${cUser.fname} ${cUser.lname}`}!</h2>
        <p>This is my profile!!!</p>
        <p>Username: {`${cUser.username}`}</p>
        <p>Email: {`${cUser.email}`}</p>
        {user.user._id === uid ? (
          <div>
            <div className='card-actions justify-end'>
              <button
                className='btn btn-primary'
                onClick={() => handleEditProfile(cUser._id)}
              >
                Edit
              </button>
              <button
                className='btn btn-secondary'
                onClick={changeProPicHandler}
              >
                Picture
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
