const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class UtilsService {
    createGuid() {
        const s4 = () => {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }

    getDateString(unixDate) {
        const date = new Date(unixDate);
        const month = monthNames[date.getMonth()].substring(0, 3);
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours();
        const min = date.getMinutes();
        return `${month} ${day}, ${year} ${hours}:${min}`;
    }
}

export const utilsService = new UtilsService();