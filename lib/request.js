const axios = require('axios');

const formUrlEncoded = (obj) => { 
    return Object.keys(obj).reduce((p, c) => `${p}&${c}=${encodeURIComponent(obj[c])}`, '');
}

module.exports = async function (method, path, data) {
    const url = `https://${this.hostname}/api/v1/${path}`
    const options = {
        method,
        url,
        data: data ? formUrlEncoded(data) : undefined,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${this.token}`
        },
        auth: {
            username: this.token
        }
    };

    return axios(options).then(response => {
        return response.data;
    }).catch(error => {
        return {
            error: error.response && error.response.data ? error.response.data.error : {
                message: `${error.message} \n url ${url} \n ${((data) ? data : '')}`,
                stack: error.stack
            }
        }
    })
}