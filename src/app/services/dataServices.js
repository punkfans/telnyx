import 'whatwg-fetch';

function postData (url, body) {
    return window.fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(res => res.json());
}

function getData (url) {
    return window.fetch(url).then(res => res.json());
}

let dataService = {postData, getData};

export default dataService;