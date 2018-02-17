import { SET_USERNAME, 
    SET_POSTS, 
    ADD_POST, 
    UPDATE_POST_VOTES, 
    OPEN_MODAL,
    CLOSE_MODAL, 
    CREATE_COMMENT, 
    UPDATE_COMMENT_VOTES } 
from "../actions/";


const addComment = (comments, comment, commentId) => {
    return comments.map((c) => {
        return c.id === commentId ? {...c, comments: [...c.comments, comment]} : 
        {...c, comments: addComment(c.comments, comment, commentId)};
    })
};

const updateCommentVote = (comments, vote, commentId, status) => {
    return comments.map((c) => {
        return c.id === commentId ? {...c, upVotes: vote, upVoteBalance: c.upVoteBalance + status} : 
        {...c, comments: updateCommentVote(c.comments, vote, commentId, status)};
    })
};

const initialState = {
    username: '',
    posts: [],
    modalOpen: false,
    commentId: -1,
    postId: -1
};

export default (state = initialState, action) => {
    let posts = [];
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.username};
        case SET_POSTS:
            posts = [...state.posts, ...action.posts];
            return {...state, posts};
        case ADD_POST:
            posts = [...state.posts, action.post];
            return {...state, posts};
        case UPDATE_COMMENT_VOTES:
            return {
                ...state, 
                posts: state.posts.map((post) => {
                    return post.id === action.postId ? 
                    {...post, 
                        commentsData: updateCommentVote(post.commentsData, action.comment.upVotes, action.comment.id, action.status)
                    } : post
                })
            }
        case UPDATE_POST_VOTES:
            return {
                ...state, 
                posts: state.posts.map((post) => {
                    return post.id === action.post.id ? 
                    {
                        ...post,
                        upVoteBalance: post.upVoteBalance + action.status,
                        upVotes: action.post.upVotes
                    }
                     : post;
                })
            }
        case OPEN_MODAL:
            return {...state, commentId: action.commentId, postId: action.postId, modalOpen: true};
        case CLOSE_MODAL:
            return {...state, commentId: -1, postId: -1, modalOpen: false}
        case CREATE_COMMENT:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    return post.id === state.postId ? 
                    {...post, 
                        comments: post.comments + 1,
                        commentsData: state.commentId === -1 ? [action.comment] :
                                addComment(post.commentsData, action.comment, state.commentId)
                    } : post
                })
        }
        default:
            return state;
    }
}
