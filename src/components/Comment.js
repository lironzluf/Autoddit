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

    upVote() {
        this.props.data.upVotes++;
        this.props.updateVotes(this.props.data, this.props.postId);
    }

    downVote() {
        this.props.data.upVotes--;
        this.props.updateVotes(this.props.data, this.props.postId);
    }

    openCommentModal() {
        this.props.openCommentModal(this.props.postId, this.props.data.id);
    }

    render() {
        return (
            <div className="post-comment">
                <div className="post-comment-vote">
                    <i className="fas fa-caret-up" onClick={() => this.upVote()}></i>
                    {this.props.data.upVotes}
                    <i className="fas fa-caret-down" onClick={() => this.downVote()}></i>
                </div>
                <div className="post-comment-data">
                    <div className="comment-username">{this.props.data.username}</div>
                    <div className="comment-title">{this.props.data.comment}</div>
                    <div className="comment-date">Submitted on {this.props.data.dateString}</div>
                    <div onClick={this.openCommentModal} className="hand">Reply</div>
                </div>
                {
                    this.props.data.comments &&
                         <CommentContainer isToggled={true} 
                            comments={this.props.data.comments} 
                            commentId={this.props.data.id}
                            postId={this.props.postId} 
                            number={this.props.data.comments.length}/>
                    
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
    updateVotes: (comment, postId) => updateCommentVotes(comment, postId)
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment);

