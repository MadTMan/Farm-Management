import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllLives = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [crops, setCrops] = useState([]);
  useEffect(() => {
    const getCrops = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/live/${user.user._id}`
      );
      setCrops(res.data);
    };
    getCrops();
  }, []);
  console.log(crops);
  const deleteCrop = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/live/delete/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <h1>All Live-Stocks</h1>
      
      
      {crops.map((crop) => (
        <div
          className='card w-96 bg-primary text-primary-content'
          key={crop._id}
        >
          <div className='card-body'>
            <h2 className='card-title'>{crop.species}</h2>
            <p>Begin: {crop.begin}</p>
            <p>end: {crop.end}</p>
            <p>Weight: {crop.weight}</p>
            <p>Expense: {crop.expense}</p>
            <div className='card-actions justify-end'>
              <Link to={`/editlive/${crop._id}`}>
                <button className='btn'>Edit</button>
              </Link>
              <button className='btn' onClick={() => deleteCrop(crop._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      
      
    </div>
  );
};

export default AllLives;
