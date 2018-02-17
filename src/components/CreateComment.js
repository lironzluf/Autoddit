import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { commentService } from '../services/comment.service';
import { closeModal, createComment } from '../redux/actions/index';

class CreateComment extends React.Component {

    constructor() {
        super();
        this.state = {
            comment: '',
            error: false
        }
        this.commentInputChange = this.commentInputChange.bind(this);
        this.createComment = this.createComment.bind(this);
    }

    componentWillMount() {
        this.commentId = this.props.commentId;
    }

    componentWillReceiveProps(newProps) {
        this.commentId = newProps.commentId;
    }

    commentInputChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    createComment(event) {
        event.preventDefault();
        const comment = commentService.createComment({comment: this.state.comment, username: this.props.username});
        this.setState({
            error: comment === null
        });
        if (comment !== null) {
            this.props.createComment(comment);
            this.props.closeModal();
        }
    }

    render() {
        return (
            <div className="backdrop">
                <div className="comment-modal">
                    <h1>Create comment</h1>
                    <form onSubmit={this.createComment}>
                        {this.state.error && <p className="error">Comment text is required.</p>}
                        <textarea onChange={this.commentInputChange} value={this.state.comment}></textarea>
                        <div className="modal-buttons">
                            <button type="submit" className="button"
                            onClick={this.createComment}>Save</button>
                            <button type="button" className="button"
                            onClick={() => this.props.closeModal()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        commentId: state.app.commentId,
        postId: state.app.postId,
        username: state.app.username
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    createComment: (comment) => createComment(comment),
    closeModal: () => closeModal()
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateComment);
