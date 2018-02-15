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

        this.state = {
            username: ''
        }
    }

    usernameChanged(event) {
        this.setState({
            username: event.target.value
        });
    }

    setUsername() {
        this.props.setUsername(this.state.username);
        this.props.goToHome();
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Welcome, please insert your username!</p>
                <input type="text" placeholder="Username" onChange={this.usernameChanged}/>
                <button onClick={this.setUsername}>Continue</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        goToHome: () => push('/'),
        setUsername: (username) => setUsername(username)
    }, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Login);
