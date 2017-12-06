import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Comment from "./Comment";


describe("Comment component test", function() {
    let component;
    let mockComment = {
        "id": 5,
        "postId": 1,
        "parent_id": null,
        "user": "Shella",
        "date": "2016-02-24",
        "content": "Mauris vitae sem in nisl pharetra dapibus in nec orci."
    };

    beforeEach(function() {
        component = ReactTestUtils.renderIntoDocument(<Comment comment={mockComment} shouldDisplayReplyArea={false} />);
    });

    describe('initial display', () => {
        it("should render one comment", () => {
            let comment = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'comment-container');
            expect(comment.length).toBe(1);
        });

        it('should not render the add new comment textarea', () => {
            let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
            expect(textarea.length).toBe(0);
        })
    });

    describe('click on the reply button', () => {
        beforeEach(() => {
            let replyButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'reply-button')[0];
            ReactTestUtils.Simulate.click(replyButton);
        });

        it('should render the add new comment textarea', () => {
            let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
            expect(textarea.length).toBe(1);
        });

        describe('click the reply button again', () => {
            beforeEach(() => {
                let replyButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'reply-button')[0];
                ReactTestUtils.Simulate.click(replyButton);
            });

            it('should hide the add new comment textarea', () => {
                let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
                expect(textarea.length).toBe(0);
            })
        });
    });
});