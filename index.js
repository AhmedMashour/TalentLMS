const Branches = require('./branches');
const Categories = require('./categories');
const Courses = require('./courses');
const Groups = require('./groups');
const System = require('./system');
const Users = require('./users');


class TalentLMS {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;

        this.Branches = new Branches(this.hostname, this.token);
        this.Categories = new Categories(this.hostname, this.token);
        this.Courses = new Courses(this.hostname, this.token);
        this.Groups = new Groups(this.hostname, this.token);
        this.System = new System(this.hostname, this.token);
        this.Users = new Users(this.hostname, this.token);
    }
}

module.exports = TalentLMS;