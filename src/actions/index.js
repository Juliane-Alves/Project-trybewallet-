// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';

export const getLogin = (email) => {
  console.log('testando');
  return {
    type: LOGIN_USER,
    email,
  };
};

export const getWallet = () => ({
  type: CHANGE_WALLET,
});

// Primeiras actions type feitas com erro "indefinido", conclusão com ajuda do colega Matheus Alves;
