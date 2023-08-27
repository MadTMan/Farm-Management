import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditLive = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let location = useLocation();
  let cid = location.pathname.split("/")[2];
  const [crop, setCrop] = useState([]);
  useEffect(() => {
    const getCrop = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/live/getlive/${cid}`
      );

      setCrop(res.data);
    };
    getCrop();
  }, []);
  console.log(crop);
  const [species, setSpecies] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [weight, setWeight] = useState("");
  const [expense, setExpense] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const crop = {
      uid: user.user._id,
      species,
      begin,
      end,
      weight,
      expense,
    };
    const res = await axios.put(
      `http://localhost:8080/api/live/editlive/${cid}`,
      crop
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Edit</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Species</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='species'
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Begin</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='begin'
            value={begin}
            onChange={(e) => setBegin(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>End</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='end'
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Weight</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Expense</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='expense'
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditLive;
