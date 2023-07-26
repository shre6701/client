import axios from 'axios';
import { loginStart, loginFailure, loginSuccess } from './AuthAction';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8800/api/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
