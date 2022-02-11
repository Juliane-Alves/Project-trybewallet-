import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonIsDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.btnValidate);
  }

  btnValidate = () => {
    const MIN_CHARACTERS = 6;
    const { email, password } = this.state;
    // uso do toLowerCase https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    // uso do match https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
    // comentario de validação anterior que não funcionou/ tentantiva com o includes.
    const validateEmail = 'email@email.com';
    const emailCheck = validateEmail.test(email);
    const passwordCheck = password.length >= MIN_CHARACTERS;
    this.setState({ buttonIsDisabled: !(emailCheck && passwordCheck) });
  }
  // Habitlitação do botão de acordo com email valido e quantidade de caracters minimos;

  render() {
    const { email, password, buttonIsDisabled } = this.state;
    const { getLoginSave, history } = this.props;
    return (
      <div>
        <h1>Trybe</h1>
        <section>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ buttonIsDisabled }
            onClick={ () => {
              getLoginSave(email); // botão habilitado para o clique, email valido enviado salvo no state
              history.push('/carteira'); // no clique do botão a rota é redirecionada para carteira;
            } }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  getLoginSave: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getLoginSave: (email) => dispatch(getLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
