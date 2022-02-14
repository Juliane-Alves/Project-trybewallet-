// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const FAIL_API = 'FAIL_API';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getLogin = (email) => {
  console.log('testando');
  return {
    type: LOGIN_USER,
    email,
  };
};

export const getWallet = (expense, coins) => ({
  type: CHANGE_WALLET,
  expense,
  exchangeRates: coins,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const failApi = (error) => ({
  type: FAIL_API,
  error,
});

export const fetchCurrencies = (expense) => (dispatch) => {
  dispatch(requestApi());
  return coinsApi().then(
    (coins) => dispatch(getWallet(expense, coins)),
    (error) => dispatch(failApi(error.message)),
  );
};

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});

// Primeiras actions type feitas com erro "indefinido", conclusão com ajuda do colega Matheus Alves;
