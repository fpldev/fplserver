# Install the Python Requests library:
# `pip install requests`

import requests


def send_request():
    # /accounts/login/
    # POST https://users.premierleague.com/accounts/login/

    try:
        response = requests.post(
            url="https://users.premierleague.com/accounts/login/",
            headers={
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0",
            },
            data={
                "login": "you@yourdomain.com",
                "password": "yourPassword",
                "app": "plfpl-web",
                "redirect_uri": "https://fantasy.premierleague.com/",
            },
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')


