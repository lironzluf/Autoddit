import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../redux/actions/index';
import { postService } from '../services/post.service';
import InputGroup from './InputGroup';

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
            title: event.target.value,
            error: false
        });
    }

    linkChanged(event) {
        this.setState({
            url: event.target.value,
            error: false
        });
    }

    imageURLChanged(event) {
        this.setState({
            imageUrl: event.target.value,
            error: false
        });
    }

    addPost(event) {
        event.preventDefault();
        const post = postService.createPost({...this.state});
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
                    {this.state.error && <p className="error">Please fill in all the fields.</p>}
                    
                    <InputGroup name="Title" 
                        validate={{minLength: 3}}
                        onChange={this.titleChanged} 
                        value={this.state.title}/>
                    <InputGroup name="Link" 
                        validate={{isLink: true}}
                        onChange={this.linkChanged} 
                        value={this.state.url}/>
                    <InputGroup name="Image URL" 
                        validate={{isLink: true}}
                        onChange={this.imageURLChanged} 
                        value={this.state.imageUrl}/>

                    <input type="submit" className="button" 
                        onClick={this.addPost} value="Save" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    backToHome: () => push('/'),
    addPost: (post) => addPost(post)
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AddLink)
