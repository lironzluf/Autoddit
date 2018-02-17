import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Comment from './Comment';
import { openModal } from '../redux/actions/';

class CommentContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            isToggled: false
        }
        this.toggleComments = this.toggleComments.bind(this);
        this.openCommentModal = this.openCommentModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            isToggled: this.props.isToggled
        })
    }

    componentWillMount() {
        this.postId = this.props.postId;
        this.number = this.props.number;
        this.comments = this.props.comments;
        this.commentId = this.props.commentId || -1;
    }

    componentWillReceiveProps(newProps) {
        this.postId = newProps.postId;
        this.number = newProps.number;
        this.comments = newProps.comments;
        this.commentId = newProps.commentId || -1;
    }

    toggleComments(status) {
        this.setState({
            isToggled: status ? status : !this.state.isToggled
        })
    }

    openCommentModal() {
        this.toggleComments(true);
        this.props.openCommentModal(this.props.postId, this.commentId);
    }

    render() {
        return (
            <div className="post-comments">
                {this.commentId === -1 && <p className="hand" onClick={this.openCommentModal}>Reply</p>}
                {!this.state.isToggled && <p onClick={this.toggleComments} className="hand">{this.props.number > 0 ? (this.props.number + ' Comments') : ''}</p>}
                {this.state.isToggled && this.comments && this.comments.map((comment, index) => {
                    return index === 0 ? <div key={comment.id}>
                        <span onClick={() => this.toggleComments(false)} className="hand">[-]</span> 
                        <Comment data={comment} postId={this.postId}/>
                    </div> : <Comment data={comment} key={comment.id} postId={this.postId} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        modalOpen: state.app.modalOpen
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    openCommentModal: (postId, commentId) => openModal(postId, commentId)
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentContainer);
