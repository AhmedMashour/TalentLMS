const axios = require('axios');
const http = require('http');

// module.exports = async function (method, path, data)  {
//     const options = {
//         method: method,
//         hostname: this.hostname,
//         path: `/api/v1/${path}?token=${this.token}`,
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Basic ${this.token}`
//         }
//     };
//     return new Promise((resolve, reject) => {
//         const req = http.request(options, (res) => {
//             const chunks = [];

//             res.on("data", (chunk) => {
//                 chunks.push(chunk);
//             });

//             res.on("end", () => {
//                 const body = Buffer.concat(chunks);
//                 resolve(body.toString());
//             });

//             res.on("error", (error) => {
//                 reject(error);
//             });
//         });
//         if (data) {
//             req.write(JSON.stringify(data));
//         }
//         req.end();
//     });
// }

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