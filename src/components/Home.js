import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from './Post';
import CreateComment from './CreateComment';

class Home extends React.Component {
    render() {
        return (

            <div>
                <p>Welcome to Autoddit {this.props.username}!</p>
                <div className="post-container">
                    {
                        this.props.posts && this.props.posts.map((post, index) => {
                            return <Post data={post} key={index} />;
                        })
                    }
                    {
                        (!this.props.posts || this.props.posts.length === 0) && <p>No posts found</p>
                    }                
                </div>
                {this.props.modalOpen && <CreateComment/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.app.username,
        posts: state.app.posts,
        modalOpen: state.app.modalOpen
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    goToAddLink: () => push('/add-link'),
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
