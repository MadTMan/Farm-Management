import { useState } from "react";
import { login } from "../components/Redux/apiCall";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // OnClick Function
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {
      email,
      password,
    });
  };

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1>Login</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
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

        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
        <Link to={"/register"}>
          <p>Create an Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
