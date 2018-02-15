import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import {LOGIN} from './Routes';

const LoginRequiredComponent = (props) => (
  (props.username) ? <Route {...props}/> : <Redirect to={LOGIN}/>
);
const stateToProps = ({app}) => ({username: app.username});
export default connect(stateToProps)(LoginRequiredComponent);