import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn } from '../actions'
import book from '../../../book.jpg';

const Login = ({username, password, logIn}) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState(false);
    const handleOnSubmit = () => {
        if (username === inputUsername && password === inputPassword)
            logIn(true);
        else
            setError(true);
    };
    return (
        <div>
            <Form className="login--form" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control data-testid="username" type="text" onChange={e => setInputUsername(e.target.value)} placeholder="Username" />
                    <br/>
                    <Form.Control type="password" onChange={e => setInputPassword(e.target.value)} placeholder="Password" />
                    {error && <Form.Text className="text-muted"  data-testid="error">
                                Incorrect username or password. Please try again.
                    </Form.Text>}
                </Form.Group>
                <Button variant="primary" type="submit" data-testid="submit">
                  Login
                </Button>
            </Form>
            <img alt='' src={book} width="500" height="400" align="right" />
        </div>
    );
};

const mapStateToProps = (state) => {
  let { username, password } = state.books
  return {
    username,
    password
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);