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
            error: false
        }
    }

    usernameChanged(event) {
        this.props.setUsername(event.target.value);
        this.setState({
            error: false
        })
    }

    setUsername(event) {
        event.preventDefault();
        if (this.props.username && this.props.username.length >= 3) {
            this.props.goToHome();
        } else {
            this.setState({
                error: true
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Welcome, please insert your username!</p>
                <form onSubmit={this.setUsername}>
                    {this.state.error && <p className="error">Username must be longer than 3 characters.</p>}
                    <input type="text" placeholder="Username" value={this.props.username} onChange={this.usernameChanged} required/>
                    <input type="submit" className="button" onClick={this.setUsername} value="Continue"/>
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
