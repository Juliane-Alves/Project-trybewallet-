import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        TrybeWallet
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Wallet;
