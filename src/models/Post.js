import { utilsService } from '../services/utils.service';

export class Post {
    constructor({title, url, imageUrl, username, createdAt = Date.now(), upVotes = 0, comments = 0, commentsData =[]}) {
        this.id = utilsService.createGuid();
        this.title = title;
        this.url = url;
        this.imageUrl = imageUrl;
        this.username = username;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.comments = comments;
        this.commentsData = commentsData;
        this.dateString = utilsService.getDateString(this.createdAt);
        this.upVoteBalance = 0;
    }

}