import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Despesas from '../components/Despesas';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        TrybeWallet
        <div>
          <Form />
        </div>
        <div>
          <Despesas />
        </div>
      </div>
    );
  }
}

export default Wallet;
