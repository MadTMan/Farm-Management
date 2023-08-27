import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCrop = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [fieldName, setFieldName] = useState("");
  const [fieldArea, setfieldArea] = useState("");
  const [yields, setYields] = useState("");
  const [cropName, setCropName] = useState("");
  const [cropDuration, setCropDuration] = useState("");
  const navigate = useNavigate();

  console.log(fieldName, fieldArea, yields, cropName, cropDuration);

  const handleClick = async (e) => {
    e.preventDefault();
    const crop = {
      uid: user.user._id,
      field: fieldName,
      name: fieldArea,
      yield: yields,
      cropName,
      cropDuration,
    };
    const res = await axios.post(
      "http://localhost:8080/api/crop/addcrop",
      crop
    );
    navigate('/allcrops');
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Add Crops</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>FieldName</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='fieldName'
            onChange={(e) => setFieldName(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='fieldArea'
            onChange={(e) => setfieldArea(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Yield</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='yield'
            onChange={(e) => setYields(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>cropName</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='cropName'
            onChange={(e) => setCropName(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>cropDuration</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='cropDuration'
            onChange={(e) => setCropDuration(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Add Crop
        </button>
      </div>
    </div>
  );
};

export default AddCrop;
