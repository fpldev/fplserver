Requires cookie authentication, see /accounts/login

`curl "https://fantasy.premierleague.com/api/me/" -H 'Cookie:yourCookie'  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0'  -H 'Referer: https://fantasy.premierleague.com/?state=success'`

# returns json
```{
	"player": {
		"date_of_birth": "1984-01-01",
		"dirty": false,
		"first_name": "Firstname",
		"gender": "M",
		"id": 987654,
		"last_name": "Lastname",
		"entry": 123456,
		"region": 241,
		"email": "you@yourdomain.com"
	},
	"watched": []
}```
