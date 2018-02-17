import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal, updateCommentVotes } from '../redux/actions/';
import CommentContainer from './CommentContainer';
class Comment extends React.Component {

    constructor() {
        super();
        this.openCommentModal = this.openCommentModal.bind(this);
    }

    componentWillMount() {
        this.comment = this.props.data;
    }

    componentWillReceiveProps(newProps) {
        this.comment = newProps.data;
    }

    upVote() {
        if (this.comment.upVoteBalance <= 0) {
            this.comment.upVotes++;
            this.props.updateVotes(this.comment, this.props.postId, 1);
        }
    }

    downVote() {
        if (this.comment.upVoteBalance >= 0) {
            this.comment.upVotes--;
            this.props.updateVotes(this.comment, this.props.postId, -1);
        }
    }

    openCommentModal() {
        this.props.openCommentModal(this.props.postId, this.comment.id);
    }

    render() {
        return (
            <div className="post-comment">
                <div className="post-comment-vote">
                    <i className="fas fa-caret-up" onClick={() => this.upVote()}></i>
                    {this.comment.upVotes}
                    <i className="fas fa-caret-down" onClick={() => this.downVote()}></i>
                </div>
                <div className="post-comment-data">
                    <div className="comment-title">{this.comment.comment}</div>
                    <div className="comment-date">Submitted on {this.comment.dateString} by <span className="comment-username">{this.comment.username}</span></div>
                    <div onClick={this.openCommentModal} className="hand">Reply</div>
                </div>
                {
                    this.comment.comments &&
                         <CommentContainer isToggled={true} 
                            comments={this.comment.comments} 
                            commentId={this.comment.id}
                            postId={this.props.postId} 
                            number={this.comment.comments.length}/>
                    
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        modalOpen: state.app.modalOpen
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    openCommentModal: (postId, commentId) => openModal(postId, commentId),
    updateVotes: (comment, postId, status) => updateCommentVotes(comment, postId, status)
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);

