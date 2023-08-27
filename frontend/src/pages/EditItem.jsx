import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditItem = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let location = useLocation();
  let cid = location.pathname.split("/")[2];
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/item/getitem/${cid}`
      );

      setItem(res.data);
    };
    getItem();
  }, []);
  console.log(item);
  const [itemName, setItemName] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
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
    const res = await axios.put(
      `http://localhost:8080/api/item/edititem/${cid}`,
      item
    );
    console.log(res);
  };
  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Edit</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>ItemName</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='ItemName'
            value={itemName}
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
            name='Category'
            value={category}
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
            value={quantity}
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
            value={price}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditItem;
