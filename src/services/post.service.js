import { posts } from '../mock/posts.json';
import { Post } from '../models/Post';
import { commentService } from './comment.service';
class PostService {

    getPosts() {
        const postsObjects = [];
        for (let post of posts) {
            postsObjects.push(new Post({...post, commentsData: commentService.getPostComments()}));
        }
        return postsObjects;
    }

    validatePostData(title, url, imageUrl, username) {
        return (title && title.length > 0 &&
            url && url.length > 0 && url.indexOf('http') === 0 &&
            imageUrl && imageUrl.length > 0 && imageUrl.indexOf('http') === 0)
    }
    
    createPost({title, url, imageUrl, username}) {
        return this.validatePostData(title, url, imageUrl, username) ?
            new Post({title, url, imageUrl, username}) : null;
    }
}

export const postService = new PostService();