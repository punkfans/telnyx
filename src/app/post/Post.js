import React from 'react';
import Comment from "src/app/comment/Comment";
import NewComment from 'src/app/newComment/NewComment';
import dataService from '../services/dataServices';
import helperService from '../services/helperService';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comments: null,
            shouldDisplayReplyArea: false
        };
        this.handleReply = this.handleReply.bind(this);
    }

    componentWillMount() {
        const id = this.props.params.id;
        dataService.getData(`http://localhost:9001/posts/${id}`)
            .then(
                (post) => {
                    this.setState({post});
                },
                (error) => {
                    console.log(error);
                });

        dataService.getData(`http://localhost:9001/posts/${id}/comments`)
            .then(
                (comments) => {
                    this.setState({comments});
                },
                (error) => {
                    console.log(error);
                });
    }

    handleReply(comment, commentId = null) {
        let body = {
            id: Math.floor(Math.random()*100000 + 1),
            postId: this.state.post.id,
            parent_id: commentId,
            user: 'Yuyang Wang',
            date: helperService.getCurrentDate(),
            content: comment
        };

        let url = `http://localhost:9001/posts/${this.state.post.id}/comments`;

        dataService.postData(url, body)
            .then(
                (comment) => {
                    let newCommentArray = [comment];
                    this.state.comments.forEach((comment) => {
                        newCommentArray.unshift(comment);
                    });
                    //toggle comment section for replying to others comments
                    if(commentId) {
                        this.setState({shouldDisplayReplyArea: false});
                    }

                    //update the state and the view
                    this.setState({comments: newCommentArray});
                },
                (error) => {
                    console.log('post new comment error' + error);
                }
            );
    }

    render() {
        if(!this.state.post || !this.state.comments) {
            return( <div>Loading...</div>);
        }

        return(
            <div>
                <div>Title: {this.state.post.title}</div>
                <div>Author: {this.state.post.author}</div>
                <div dangerouslySetInnerHTML={{__html: this.state.post.content}} />
                {this.state.comments.map((comment) => {
                    return <Comment
                                shouldDisplayReplyArea={this.state.shouldDisplayReplyArea}
                                handleComment={this.handleReply} key={comment.id}
                                comment={comment}
                            />
                })}
                <NewComment
                    buttonText='Add My Comment'
                    postId={this.state.post.id}
                    handleComment={this.handleReply}
                />
            </div>
        );
    }
}