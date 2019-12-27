const axios = require('axios');
module.exports = async function (method, path, data) {
    const url = `https://${this.hostname}/api/v1/${path}`
    const options = {
        method,
        url,
        data: data ? data : undefined,
        headers: {
            'Content-Type': 'application/json',
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