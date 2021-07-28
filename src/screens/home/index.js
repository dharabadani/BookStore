import React from 'react';
import Search from './containers/Search'
import Books from './containers/Books'
import Login from './containers/Login'
import './home.css'
import { connect } from 'react-redux'


const Home = ({loggedIn}) => (
  <div data-testid="home" className="page">
    <div className="container">
      {!loggedIn && <Login />}
      {loggedIn && <Search />}
      {loggedIn && <Books />}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  let { loggedIn } = state.books
  return {
    loggedIn
  }
};

export default connect(
  mapStateToProps,
  null
)(Home);