/* eslint-disable keyword-spacing */
// eslint-disable-next-line import/named
import { LOGIN_USER } from '../actions/index';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

const userLogin = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: actions.email,
    };
  default:
    return state;
  }
};

export default userLogin;
