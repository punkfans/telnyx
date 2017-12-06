import helperService from "./helperService";

describe('getCurrentDate test', () => {
    let date;
    beforeEach(() => {
        date = helperService.getCurrentDate();
    });

    it('should be in the format of "mm-dd-yyyy"', () => {
        expect(date.match(/\d\d-\d\d-\d\d\d\d/)).toBeDefined();
    });
});

describe('sortPosts test', () => {
    let posts = [
        {publish_date: '10-10-1998'},
        {publish_date: '10-10-2005'},
        {publish_date: '10-10-2004'},
    ];
    beforeEach(() => {
        posts = helperService.sortPosts(posts);
    });

    it('should sort the posts base on dates', () => {
        expect(posts[0].publish_date).toBe('10-10-2005');
        expect(posts[1].publish_date).toBe('10-10-2004');
        expect(posts[2].publish_date).toBe('10-10-1998');
    });
});