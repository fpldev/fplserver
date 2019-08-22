// /api/me/ (GET https://fantasy.premierleague.com/api/me/)

jQuery.ajax({
    url: "https://fantasy.premierleague.com/api/me/",
    type: "GET",
    headers: {
        "Cookie": "",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:40.0) Gecko/20100101 Firefox/40.0",
        "Referer": "https://fantasy.premierleague.com/?state=success",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});


