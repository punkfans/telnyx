import React from 'react';
import PropTypes from 'prop-types';
import NewComment from '../newComment/NewComment';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.comment.content,
            shouldDisplayReplyArea: this.props.shouldDisplayReplyArea,
            toggleText: 'Reply'
        };

        this.toggleReplyVisibility = this.toggleReplyVisibility.bind(this);
    }

    toggleReplyVisibility() {
        this.setState({shouldDisplayReplyArea: !this.state.shouldDisplayReplyArea});
        if(this.state.shouldDisplayReplyArea) {
            this.setState({toggleText: 'Reply'});
        }else {
            this.setState({toggleText: 'Collapse'});
        }
    }

    render() {
        return (
            <div key={this.props.comment.id} className='comment-container'>
                <div>Commented by {this.props.comment.user}</div>
                <div>{this.state.content}</div>
                <a className="reply-button" onClick={this.toggleReplyVisibility}>{this.state.toggleText}</a>
                <div>
                    {
                        this.state.shouldDisplayReplyArea &&
                        <NewComment
                            toggleReplyVisibility={this.toggleReplyVisibility}
                            commentId={this.props.comment.id}
                            buttonText='Reply'
                            handleComment={this.props.handleComment}
                        />
                    }
                </div>
            </div>
        );
    }
}

Comment.propType = {
    comment: PropTypes.object.isRequired
};