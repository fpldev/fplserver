`curl "https://fantasy.premierleague.com/api/me/" -H 'Cookie: pl_profile=xyz; csrftoken=pqr; sessionid=abc'  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0'  -H 'Referer: https://fantasy.premierleague.com/?state=success'`

# returns json
`{"player":{"date_of_birth":"1972-04-17","dirty":false,"first_name":"YourName","gender":"M","id":123456,"last_name":"Last name","entry":56789,"region":241,"email":"you@yourdomain.com"},"watched":[]}`
