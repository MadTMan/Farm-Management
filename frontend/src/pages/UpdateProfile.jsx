import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "../components/Redux/apiCall";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user);
  let users = userDetails.user;
  const accesstoken = users.accessToken;
  const uid = users.user._id;
  const [fname, setFname] = useState(users.user.fname);
  const [lname, setLname] = useState(users.user.lname);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const info = { fname, lname };
    try {
      await updateProfile(dispatch, info, uid, accesstoken);
    } catch (err) {
      console.log(err);
    }
  };
  const goBack = () => {
    if (location.search || location.hash) {
      navigate(location.pathname, { replace: true });
    }
    navigate(`/profile/${uid}`);
  };

  return (
    <div>
      <span onClick={goBack}>GoBack</span>
      <h1>Update Profile</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='fname'
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='lname'
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <button className='btn btn-primary' onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
