import { utilsService } from '../services/utils.service';

export class Comment {
    constructor({comment, username, createdAt = Date.now(), comments =[], upVotes = 0}) {
        this.id = utilsService.createGuid();
        this.comment = comment;
        this.username = username;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.comments = this.getComments(comments);
        this.dateString = utilsService.getDateString(this.createdAt);
    }

    getComments(comments) {
        const commentObjects = [];
        for (let comment of comments) {
            commentObjects.push(new Comment({...comment}));
        }
        return commentObjects;
    }

}