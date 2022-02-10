/* eslint-disable keyword-spacing */
// eslint-disable-next-line import/named
import { LOGIN_USER } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userLogin = (state = INITIAL_STATE, actions) => {
  switch(actions.type) {
  case LOGIN_USER:
    return {
      ...state,
      user: {
        email: actions.email,
      },
    };
  default:
    return state;
  }
};

export default userLogin;
