import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import './App.css';
import Home from "./components/Home";
import AddLink from "./components/AddLink";
import Login from "./components/Login";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class App extends Component {

    componentDidMount() {
        if (!this.props.username && this.props.path) {
            this.props.redirectToLogin();
        }
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/add-link">Add Link</Link>
                </header>

                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/add-link" component={AddLink}/>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.app.username,
        path: state.routing.location.pathname
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    redirectToLogin: () => push('/login')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
