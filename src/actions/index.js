// Coloque aqui suas actions
const LOGIN_USER = 'LOGIN_USER';
const CURRENCIES = 'CURRENCIES';
const EXPENSES = 'EXPENSES';

export const saveUserAct = (email) => ({
  type: LOGIN_USER,
  email,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const getExpenses = (expenses) => ({
  type: EXPENSES,
  expenses,
});
