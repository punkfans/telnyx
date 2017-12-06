function getCurrentDate () {
    let date = new Date();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    if(dd.length !== 1) {
        dd = '0' + dd;
    }

    return `${mm}-${dd}-${yyyy}`;
}

function sortPosts (posts) {
    posts.sort((post1, post2) => {
        let post1Array = post1.publish_date.split('-');
        let post2Array = post2.publish_date.split('-');
        for(let i = 0; i < 3; i++) {
            if(post1Array[i] !== post2Array[i]) {
                return post2Array[i] - post1Array[i];
            }
        }

        return post2Array[i] - post1Array[i];
    });

    return posts;
}

let helperService = {getCurrentDate, sortPosts};

export default helperService;