import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import '../services/dataServices';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

import { Post } from "./Post";

//polyfill for Promise
if(!window.Promise) {
    window.Promise = Promise;
}

describe("Post component test", function() {
    let component;

    beforeEach(function() {
        let params = {id: 1};
        component = ReactTestUtils.renderIntoDocument(<Post params={params} />);

        component.setState({
            post: {
                "id": 1,
                "title": "Blog post #1",
                "author": "Melissa Manges",
                "publish_date": "2016-02-23",
                "slug": "blog-post-1",
                "description": "Utroque denique invenire et has.",
                "content": "<p>test</p>"
            }
        });

        component.setState({
            comments: [{
                "id": 3,
                "postId": 1,
                "parent_id": 2,
                "user": "Amelia",
                "date": "2016-02-24",
                "content": "Casa."
            },{
                "id": 4,
                "postId": 1,
                "parent_id": 5,
                "user": "assd",
                "date": "2016-02-24",
                "content": "fdfdsfsdf."
            }]
        });
    });

    it("should render a textarea", () => {
        let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
        expect(textarea.length).toBe(1);
    });

    it('should render a button', () => {
        let button = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
        expect(button.length).toBe(1);
    });

    it('should render two comments', () => {
        let comments = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'comment-container');
        expect(comments.length).toBe(2);
    });
});