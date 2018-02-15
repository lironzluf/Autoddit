import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { posts } from '../mock/posts.json';
import Post from './Post';

class Home extends React.Component {

    render() {
        return (

            <div>
                <p>Welcome to Autoddit {this.props.username}!</p>

                {
                    posts && posts.map((post, index) => {
                        return <Post data={post} key={index} />;
                    })
                }                
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
    goToAddLink: () => push('/add-link')
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
