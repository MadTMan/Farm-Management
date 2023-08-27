import { useState } from "react";
import { register } from "../components/Redux/apiCall";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();

  // STATE
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // OnClick Function
  const handleRegistration = (e) => {
    e.preventDefault();
    register(dispatch, {
      fname,
      lname,
      username,
      email,
      password,
    });
  };

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Signup</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='fname'
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='lname'
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Username</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className='btn btn-primary' onClick={handleRegistration}>
          Register
        </button>
        <Link to={"/login"}>
          <p>Already Have an Account?</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
