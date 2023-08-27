import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const AddWork = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [jobTitle, setJobTitle] = useState("");
  const [rate, setRate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [benefits, setBenefits] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const crop = {
      uid: user.user._id,
      jobTitle,
      rate,
      startDate,
      endDate,
      benefits,
    };
    const res = await axios.post(
      "http://localhost:8080/api/work/addwork",
      crop
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Add Work-Force</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>JobTitle</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='jobTitle'
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Rate</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='rate'
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>StartDate</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='startDate'
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>EndDate</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='endDate'
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Benefits</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='benefits'
            onChange={(e) => setBenefits(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLive;
