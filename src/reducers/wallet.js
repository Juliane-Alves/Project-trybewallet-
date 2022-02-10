// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// eslint-disable-next-line import/named
import { CHANGE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_WALLET:
    return {
      ...state,
      currencies: [],
      expenses: [],
    };
  default:
    return state;
  }
};

export default walletReducer;
