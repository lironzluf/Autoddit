import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions/index';
import { postService } from '../services/post.service';

class AddLink extends React.Component {
    constructor() {
        super();
        this.addPost = this.addPost.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.linkChanged = this.linkChanged.bind(this);
        this.imageURLChanged = this.imageURLChanged.bind(this);

        this.state = {
            title: '',
            url: '',
            imageUrl: '',
            error: false
        }
    }

    titleChanged(event) {
        this.setState({
            title: event.target.value
        });
    }

    linkChanged(event) {
        this.setState({
            url: event.target.value
        });
    }

    imageURLChanged(event) {
        this.setState({
            imageUrl: event.target.value
        });
    }

    addPost(event) {
        event.preventDefault();
        const post = postService.createPost({...this.state, username: this.props.username});
        this.setState({
            error: post === null
        });
        if (post !== null) {
            this.props.addPost(post) && this.props.backToHome();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addPost}>
                    <h1>Add Link</h1>
                    {this.state.error && <p className="error">Please fill in all the fields and check urls are valid.</p>}
                    
                    <div className="input-group">
                        <label>Title</label>
                        <input type="text" onChange={this.titleChanged} value={this.state.title}/>
                    </div>
                    <div className="input-group">
                        <label>Link</label>
                        <input type="text" onChange={this.linkChanged} value={this.state.url}/>
                    </div>
                    <div className="input-group">
                        <label>Image URL</label>
                        <input type="text" onChange={this.imageURLChanged} value={this.state.imageUrl}/>
                    </div>

                    <button type="submit" className="button" 
                        onClick={this.addPost}>Save</button>
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
    backToHome: () => push('/'),
    addPost: (post) => addPost(post)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddLink)
