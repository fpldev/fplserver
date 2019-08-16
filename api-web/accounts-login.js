// request /accounts/login/ 
(function(callback) {
    'use strict';
        
    const httpTransport = require('https');
    const responseEncoding = 'utf8';
    const httpOptions = {
        hostname: 'users.premierleague.com',
        port: '443',
        path: '/accounts/login/',
        method: 'POST',
        headers: {"Content-Type":"application/x-www-form-urlencoded","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0"}
    };
    httpOptions.headers['User-Agent'] = 'node ' + process.version;
 

    const request = httpTransport.request(httpOptions, (res) => {
        let responseBufs = [];
        let responseStr = '';
        
        res.on('data', (chunk) => {
            if (Buffer.isBuffer(chunk)) {
                responseBufs.push(chunk);
            }
            else {
                responseStr = responseStr + chunk;            
            }
        }).on('end', () => {
            responseStr = responseBufs.length > 0 ? 
                Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;
            
            callback(null, res.statusCode, res.headers, responseStr);
        });
        
    })
    .setTimeout(0)
    .on('error', (error) => {
        callback(error);
    });
    request.write("login=you%40yourdomain.com&password=yourPassword&app=plfpl-web&redirect_uri=https%3A%2F%2Ffantasy.premierleague.com%2F")
    request.end();
    

})((error, statusCode, headers, body) => {
    console.log('ERROR:', error); 
    console.log('STATUS:', statusCode);
    console.log('HEADERS:', JSON.stringify(headers));
    console.log('BODY:', body);
});
