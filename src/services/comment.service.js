import { comments } from '../mock/comments.json';
import { Comment } from '../models/Comment';

class CommentService {

    getPostComments() {
        const commentObjects = [];
        for (let comment of comments) {
            commentObjects.push(new Comment({...comment}));
        }
        return commentObjects;
    }

    validateCommentData(comment, username) {
        return (comment && comment.length > 0 &&
            username && username.length > 0)
    }
    
    createComment({comment, username}) {
        return this.validateCommentData(comment, username) ?
            new Comment({comment, username}) : null;
    }
}

export const commentService = new CommentService();