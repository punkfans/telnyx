import React from 'react';

export default class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            isButtonDisabled: true
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        if(event.target.value !== '') {
            this.setState({isButtonDisabled: false});
        }else {
            this.setState({isButtonDisabled: true});
        }
        this.setState({comment: event.target.value});
    }

    handleOnClick (comment, commentId = null) {
        this.props.handleComment(comment, commentId);

        //toggle the reply text area visibility only for replying others comment
        if(commentId) {
            this.props.toggleReplyVisibility();
        }

        //reset text area after hitting the submit button
        this.setState({comment: ''});
    }

    render() {
        return (
            <div className="new-comment-container">
                <div>
                    <textarea cols="50" rows="5" value={this.state.comment} onChange={this.handleOnChange} />
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={this.handleOnClick.bind(this, this.state.comment, this.props.commentId)}>{this.props.buttonText}</button>
            </div>
        );
    }
}