import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddLive = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [species, setSpecies] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [weight, setWeight] = useState("");
  const [expense, setExpense] = useState("");
  const navigate = useNavigate()
  
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
    const res = await axios.post(
      "http://localhost:8080/api/live/addlive",
      crop
    );
    useNavigate = '/alllive'
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Add Live-stock</h1>
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
            onChange={(e) => setExpense(e.target.value)}
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
