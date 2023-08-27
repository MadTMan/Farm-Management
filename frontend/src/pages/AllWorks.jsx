import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllWorks = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const getWorks = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/work/${user.user._id}`
      );
      setWorks(res.data);
    };
    getWorks();
  }, []);
  console.log(works);
  const deleteWork = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/api/work/delete/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <h1>All Work-Force</h1>
      
      
      {works.map((work) => (
        <div
          className='card w-96 bg-primary text-primary-content'
          key={work._id}
        >
          <div className='card-body'>
            <h2 className='card-title'>{work.jobTitle}</h2>
            <p>Rate: {work.rate}</p>
            <p>StartDate: {work.startDate}</p>
            <p>EndDate: {work.endDate}</p>
            <p>Benefits: {work.benefits}</p>
            <div className='card-actions justify-end'>
              <Link to={`/editwork/${work._id}`}>
                <button className='btn'>Edit</button>
              </Link>
              <button className='btn' onClick={() => deleteWork(work._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      
      
    </div>
  );
};

export default AllWorks;
