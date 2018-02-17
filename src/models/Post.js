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

export class Post {
    constructor({title, url, imageUrl, username, createdAt = Date.now(), upVotes = 0, comments = 0, commentsData =[]}) {
        this.id = createGuid();
        this.title = title;
        this.url = url;
        this.imageUrl = imageUrl;
        this.username = username;
        this.createdAt = createdAt;
        this.upVotes = upVotes;
        this.comments = comments;
        this.commentsData = commentsData;
        this.dateString = this.getDateString();
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