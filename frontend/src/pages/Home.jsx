import Navbar from "../components/Navbar/Navbar";
import CropCard from "../components/CropCard/CropCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className='mb-1 ' ></h1>
        <div className="flex">
          <CropCard
            back_img='https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            type='Crop'
            details='See Your Crops'
            url='/allcrops'
          />
          <CropCard
            back_img='https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            type='Live Stock'
            details='See Your Live Stocks'
            buttonText="View Livestock"
            addBtnUrl='/addLive'
            addBtnText='Add'
            url='/alllives'
          />
          <CropCard
            back_img='https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            type='Work'
            details='See Your Work'
            buttonText='View Work'
            addBtnUrl='/addWork'
            addBtnText='Add'
            url='/allworks'
          />
          <CropCard
            back_img='https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            type='Item'
            details='See Your Items'
            buttonText='View Item'
            addBtnUrl='/addItem'
            addBtnText='Add'
            url='/allitems'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
