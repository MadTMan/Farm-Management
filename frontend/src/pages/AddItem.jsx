import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const AddItem = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const item = {
      uid: user.user._id,
      itemName,
      category,
      quantity,
      price,
      description,
    };
    const res = await axios.post(
      "http://localhost:8080/api/item/additem",
      item
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Add</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>itemName</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='itemName'
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Category</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='category'
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Quantity</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='quantity'
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItem;
