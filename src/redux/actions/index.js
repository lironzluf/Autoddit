export const SET_USERNAME = 'SET_USERNAME';
export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_VOTES = 'UPDATE_POST_VOTES';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT_VOTES = 'UPDATE_COMMENT_VOTES';

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username
    }
};

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    }
};

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
};

export const updatePostVotes = (post, status) => {
    return {
        type: UPDATE_POST_VOTES,
        post,
        status
    }
};

export const openModal = (postId, commentId) => {
    return {
        type: OPEN_MODAL,
        commentId,
        postId
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

export const createComment = (comment) => {
    return {
        type: CREATE_COMMENT,
        comment
    }
};

export const updateCommentVotes = (comment, postId, status) => {
    return {
        type: UPDATE_COMMENT_VOTES,
        postId,
        comment,
        status
    }
};