`curl -X "POST" "https://users.premierleague.com/accounts/login/" \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0' \
     --data-urlencode "login=you@yourdomain.com" \
     --data-urlencode "password=yourPassword" \
     --data-urlencode "app=plfpl-web" \
     --data-urlencode "redirect_uri=https://fantasy.premierleague.com/"`

## response
302 response code.
Response includes cookies required for subsequent authenticated requests, cookie names of interest: pl_profile, csrftoken