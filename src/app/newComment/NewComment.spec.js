import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import NewComment from "./NewComment";


describe("NewComment component test", function() {
    let component;
    let props = {
        handleComment: function (a, b) {},
        toggleReplyVisibility: function () {},
    };

    beforeEach(function() {
        component = ReactTestUtils.renderIntoDocument(<NewComment handleComment={props.handleComment} toggleReplyVisibility={props.toggleReplyVisibility} />);
    });

    describe('initial display', () => {
        it("should render one textarea", () => {
            let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
            expect(textarea.length).toBe(1);
        });

        it('should render one button', () => {
            let button = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button');
            expect(button.length).toBe(1);
        });

        it('should render the button as disabled', () => {
            let button = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
            expect(button.disabled).toBe(true);
        })
    });

    describe('put some text in the comment area', () => {
        beforeEach(() => {
            let textarea = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea')[0];
            ReactTestUtils.Simulate.change(textarea, {target: {value: 'test'}});
        });

        it('should enable the button', () => {
            let button = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button')[0];
            expect(button.disabled).toBe(false);
        });
    });
});