import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import '../services/dataServices';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

import { Posts } from "./Posts";

//polyfill for Promise
if(!window.Promise) {
    window.Promise = Promise;
}

describe("Posts component test", function() {
    let component;

    beforeEach(function() {
        component = ReactTestUtils.renderIntoDocument(<Posts />);

        component.setState({
            posts: [
                {
                    "id": 1,
                    "title": "Blog post #1",
                    "author": "Melissa Manges",
                    "publish_date": "2016-02-23",
                    "slug": "blog-post-1",
                    "description": "Utroque denique invenire et has.",
                    "content": "<p>test</p>"
                },
                {
                    "id": 2,
                    "title": "Blog post #2",
                    "author": "Melissa Manges",
                    "publish_date": "2016-02-23",
                    "slug": "blog-post-1",
                    "description": "Utroque denique invenire et has.",
                    "content": "<p>test1</p>"
                }
            ]
        });
    });

    it("should render two posts", () => {
        let post = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'post-container');
        expect(post.length).toBe(2);
    });
});