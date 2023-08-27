import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProfilePicUpdate = () => {
  const [image, setImage] = useState();
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const accessToken = user.accessToken;
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.put(
      `http://localhost:8080/api/user/update/profile/pic/${user.user._id}`,
      formData,
      {
        "Content-Type": "multipart/form-data",
      }
    );
  };
  return (
    <div>
      <form onSubmit={submitImage}>
        <input
          type='file'
          name='file'
          id='file'
          className='file-input file-input-bordered file-input-success w-full max-w-xs'
          onChange={onInputChange}
        />
        <button
          type='submit'
          className='rounded-full p-2 w-24 my-4 bg-logo-text-green text-zinc-950 hover:bg-lime-300'
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default ProfilePicUpdate;
