import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditWork = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let location = useLocation();
  let cid = location.pathname.split("/")[2];
  const [work, setWork] = useState([]);
  useEffect(() => {
    const getWork = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/work/getwork/${cid}`
      );

      setWork(res.data);
    };
    getWork();
  }, []);
  console.log(work);
  const [jobTitle, setJobTitle] = useState("");
  const [rate, setRate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [benefits, setBenefits] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const work = {
      uid: user.user._id,
      jobTitle,
      rate,
      startDate,
      endDate,
      benefits,
    };
    const res = await axios.put(
      `http://localhost:8080/api/work/editwork/${cid}`,
      work
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Edit</h1>
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
            value={jobTitle}
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
            value={rate}
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
            value={startDate}
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
            value={endDate}
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
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditWork;
