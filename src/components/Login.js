import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {setUsername} from "../redux/actions/";

class Login extends React.Component {
    constructor() {
        super();
        this.usernameChanged = this.usernameChanged.bind(this);
        this.setUsername = this.setUsername.bind(this);
    }

    usernameChanged(event) {
        this.props.setUsername(event.target.value);
    }

    setUsername(event) {
        event.preventDefault();
        if (this.props.username && this.props.username.length > 0) {
            this.props.goToHome();
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Welcome, please insert your username!</p>
                <form onSubmit={this.setUsername}>
                    <input type="text" placeholder="Username" onChange={this.usernameChanged}/>
                    <button type="submit" className="button" onClick={this.setUsername}>Continue</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.app.username
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
        goToHome: () => push('/'),
        setUsername: (username) => setUsername(username)
    }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
