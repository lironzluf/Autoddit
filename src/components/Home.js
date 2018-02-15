import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends React.Component {
    componentDidMount() {
        if (!this.props.username) {
            this.props.redirectToLogin();
        }
    }

    render() {
        return (

            <div>
                <h1>Home</h1>
                <p>Welcome home!</p>
                <button onClick={() => this.props.goToAddLink()}>Go to add link page via redux</button>
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
    redirectToLogin: () => push('/login'),
    goToAddLink: () => push('/add-link')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
