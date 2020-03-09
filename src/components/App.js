import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import logo from './logo.svg';
import './App.css';
import HomePage from './home/HomePage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import * as countriesActions from '../redux/actions/countriesActions';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.loadCountries().catch(error => {
      alert('Loading News failed' + error);
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header countries={this.props.countries} />
        <Switch>
          <Route exact path="/" component={HomePage}>
            <Redirect to="/country/nl" />
          </Route>
          <Route exact path="/country/:id?" component={HomePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countriesActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    countries: state.countries
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
