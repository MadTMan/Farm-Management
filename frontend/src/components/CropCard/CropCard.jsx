import { Link } from "react-router-dom";


const CropCard = ({ back_img, type, details, url, buttonText = 'View Crops', addBtnText = 'Add', addBtnUrl='' }) => {
  return (
    <div className='mr-4 card w-96 bg-base-100 shadow-xl image-full mt-24'>
      <figure>
        <img src={back_img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{type}</h2>
        <p>{details}</p>
        <div className='card-actions justify-end'>
          <Link to={addBtnUrl}>
            <button className='btn btn-primary'>{ addBtnText }</button>
          </Link>
          <Link to={url}>
            <button className='btn btn-primary'>{ buttonText }</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropCard;
