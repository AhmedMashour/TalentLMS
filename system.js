request = require('./lib/request');

class System {
    constructor(hostname, token) {
        this.hostname = hostname;
        this.token = token;
        this._request = request;
    }

     /**
     * Get System Info
     */
    getSiteInfo() {
        return this._request('GET', `siteinfo`);
    }

    /**
     * Get Rate Limit
     */
    getRateLimit() {
        return this._request('GET', `ratelimit`);
    }
    
     /**
     * Get TimeLine
     * @param obj The object.
     * @param obj.event_type Event Type.
     */
    getTimeLine(obj) {
        if (!obj.event_type) {
            throw new Error('To get timeline event_type has to be sent');
        }
        return this._request('POST', `gettimeline`, obj);
    }
}

module.exports = System;