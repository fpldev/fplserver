## /api/my-team/XXX/

### Requires Cookie authentication
`curl "https://fantasy.premierleague.com/api/my-team/XXX/" -H 'Cookie:yourCookie' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0'`

## returns json
```{
	"picks": [
		{
			"element": 526,
			"position": 1,
			"selling_price": 45,
			"multiplier": 1,
			"purchase_price": 45,
			"is_captain": false,
			"is_vice_captain": true
		},
		{
			"element": 42,
			"position": 2,
			"selling_price": 45,
			"multiplier": 1,
			"purchase_price": 45,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 162,
			"position": 3,
			"selling_price": 50,
			"multiplier": 1,
			"purchase_price": 50,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 85,
			"position": 4,
			"selling_price": 45,
			"multiplier": 1,
			"purchase_price": 45,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 43,
			"position": 5,
			"selling_price": 45,
			"multiplier": 1,
			"purchase_price": 45,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 138,
			"position": 6,
			"selling_price": 55,
			"multiplier": 1,
			"purchase_price": 55,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 29,
			"position": 7,
			"selling_price": 60,
			"multiplier": 1,
			"purchase_price": 60,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 80,
			"position": 8,
			"selling_price": 50,
			"multiplier": 1,
			"purchase_price": 50,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 282,
			"position": 9,
			"selling_price": 65,
			"multiplier": 1,
			"purchase_price": 65,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 233,
			"position": 10,
			"selling_price": 85,
			"multiplier": 1,
			"purchase_price": 85,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 90,
			"position": 11,
			"selling_price": 65,
			"multiplier": 2,
			"purchase_price": 65,
			"is_captain": true,
			"is_vice_captain": false
		},
		{
			"element": 148,
			"position": 12,
			"selling_price": 55,
			"multiplier": 0,
			"purchase_price": 55,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 122,
			"position": 13,
			"selling_price": 55,
			"multiplier": 0,
			"purchase_price": 55,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 50,
			"position": 14,
			"selling_price": 60,
			"multiplier": 0,
			"purchase_price": 60,
			"is_captain": false,
			"is_vice_captain": false
		},
		{
			"element": 338,
			"position": 15,
			"selling_price": 110,
			"multiplier": 0,
			"purchase_price": 110,
			"is_captain": false,
			"is_vice_captain": false
		}
	],
	"chips": [
		{
			"status_for_entry": "available",
			"played_by_entry": [],
			"name": "wildcard",
			"number": 1,
			"start_event": 2,
			"stop_event": 20,
			"chip_type": "transfer"
		},
		{
			"status_for_entry": "available",
			"played_by_entry": [],
			"name": "freehit",
			"number": 1,
			"start_event": 2,
			"stop_event": 38,
			"chip_type": "transfer"
		},
		{
			"status_for_entry": "available",
			"played_by_entry": [],
			"name": "bboost",
			"number": 1,
			"start_event": 1,
			"stop_event": 38,
			"chip_type": "team"
		},
		{
			"status_for_entry": "available",
			"played_by_entry": [],
			"name": "3xc",
			"number": 1,
			"start_event": 1,
			"stop_event": 38,
			"chip_type": "team"
		}
	],
	"transfers": {
		"cost": 4,
		"status": "cost",
		"limit": 1,
		"made": 3,
		"bank": 110,
		"value": 891
	}
}```
