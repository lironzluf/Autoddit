import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatePostVotes } from '../redux/actions/';
import CommentContainer from './CommentContainer';
class Post extends React.Component {

    componentWillMount() {
        this.post = this.props.data;
    }

    componentWillReceiveProps(newProps) {
        this.post = newProps.data;
    }

    upVote() {
        if (this.post.upVoteBalance <= 0) {
            this.post.upVotes++;
            this.props.updateVotes(this.post, 1);
        }
    }

    downVote() {
        if (this.post.upVoteBalance >= 0) {
            this.post.upVotes--;
            this.props.updateVotes(this.post, -1);
        }
    }

    render() {
        return (
            <div className="post">
                <div className="post-votes">
                    <i className="fas fa-caret-up" onClick={() => this.upVote()}></i>
                    {this.post.upVotes}
                    <i className="fas fa-caret-down" onClick={() => this.downVote()}></i>
                </div>
                <img src={this.post.imageUrl} alt={this.post.title}/>
                <div className="post-info">
                    <a href={this.post.url} target="_blank">{this.post.title}</a>
                    <span className="post-created-at">Submitted on {this.post.dateString} by <span className="post-username">{this.post.username}</span></span>
                    <CommentContainer comments={this.post.commentsData} postId={this.post.id} number={this.post.comments}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    updateVotes: (post, status) => updatePostVotes(post, status)
}, dispatch);


export default connect(
    null,
    mapDispatchToProps
)(Post);
