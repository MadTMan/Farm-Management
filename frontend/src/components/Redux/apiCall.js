import axios from "axios";
import {
  registrationStart,
  registrationFailure,
  registrationSuccess,
  loginStart,
  loginSuccess,
  loginFailure,
  updateSuccess,
  updateStart,
  updateFailure,
  // proPicFailure,
  // proPicStart,
  // proPicSuccess,
} from "./userReducer";

export const register = async (dispatch, user) => {
  dispatch(registrationStart());
  try {
    const res = await axios.post(
      `http://localhost:8080/api/user/register`,
      user
    );
    dispatch(registrationSuccess(res.data));
  } catch (err) {
    dispatch(registrationFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://localhost:8080/api/user/login`, user);
    console.log(res.data, 100);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const updateProfile = async (dispatch, user, uid, accessToken) => {
  dispatch(updateStart());
  try {
    const res = await axios.put(
      `http://localhost:8080/api/user/update/profile/${uid}`,
      user,
      {
        headers: {
          token: accessToken,
        },
      }
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
