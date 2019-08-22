# Install the Python Requests library:
# `pip install requests`

import requests


def send_request():
    # /api/fixtures/
    # GET https://fantasy.premierleague.com/api/fixtures/

    try:
        response = requests.get(
            url="https://fantasy.premierleague.com/api/fixtures/",
            params={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0",
            },
            headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0",
            },
        )
        print('Response HTTP Status Code: {status_code}'.format(
            status_code=response.status_code))
        print('Response HTTP Response Body: {content}'.format(
            content=response.content))
    except requests.exceptions.RequestException:
        print('HTTP Request failed')


