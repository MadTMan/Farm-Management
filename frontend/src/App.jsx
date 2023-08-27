import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import ProfilePicUpdate from "./pages/ProfilePicUpdate";
import AddCrop from "./pages/AddCrop";
import AllCrops from "./pages/AllCrops";
import EditCrop from "./pages/EditCrop";
import AddLive from "./pages/AddLive";
import AllLives from "./pages/AllLives";
import EditLive from "./pages/EditLive";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={user === null ? <Navigate to={"/register"} /> : <Home />}
          ></Route>
          <Route
            path='/register'
            element={user !== null ? <Navigate to={"/"} /> : <Register />}
          ></Route>
          <Route
            path='/login'
            element={user !== null ? <Navigate to={"/"} /> : <Login />}
          ></Route>
          <Route
            path='/profile/:id'
            element={user !== null ? <Profile /> : <Login />}
          ></Route>
          <Route
            path='/update/profile/pic/:id'
            element={<ProfilePicUpdate />}
          ></Route>
          <Route path='/update/profile/:id' element={<UpdateProfile />}></Route>
          <Route path='/addcrop' element={<AddCrop />}></Route>
          <Route path='/allcrops' element={<AllCrops />}></Route>
          <Route path='/editcrop/:id' element={<EditCrop />}></Route>
          <Route path='/addlive' element={<AddLive />}></Route>
          <Route path='/alllives' element={<AllLives />}></Route>
          <Route path='editlive/:id' element={<EditLive />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
