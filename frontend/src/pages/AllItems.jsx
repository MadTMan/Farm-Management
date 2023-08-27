import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllItems = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/item/${user.user._id}`
      );
      setItems(res.data);
    };
    getItems();
  }, []);
  console.log(items);
  const deleteItem = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/item/delete/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <h1>All Items</h1>
      {items.map((item) => (
        <div
          className='card w-96 bg-primary text-primary-content'
          key={item._id}
        >
          <div className='card-body'>
            <h2 className='card-title'>{item.name}</h2>
            <p>ItemName: {item.itemName}</p>
            <p>Category: {item.category}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <div className='card-actions justify-end'>
              <Link to={`/edititem/${item._id}`}>
                <button className='btn'>Edit</button>
              </Link>
              <button className='btn' onClick={() => deleteItem(item._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllItems;
