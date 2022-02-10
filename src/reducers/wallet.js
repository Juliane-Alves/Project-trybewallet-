// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// eslint-disable-next-line import/named
import { CURRENCIES, EXPENSES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const walletReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: actions.currencies,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses],
    };
  default:
    return state;
  }
};

export default walletReducer;
