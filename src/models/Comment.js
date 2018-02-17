const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const createGuid = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

export class Comment {
    constructor({comment, username, createdAt = Date.now(), comments =[], upVotes = 0}) {
        this.id = createGuid();
        this.comment = comment;
        this.username = username;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.comments = this.getComments(comments);
        this.dateString = this.getDateString();
    }

    getComments(comments) {
        const commentObjects = [];
        for (let comment of comments) {
            commentObjects.push(new Comment({...comment}));
        }
        return commentObjects;
    }

    getDateString() {
        const date = new Date(this.createdAt);
        const month = monthNames[date.getMonth()].substring(0, 3);
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const min = date.getMinutes();
        return `${month} ${day}, ${year} ${hours}:${min}`;
    }

}