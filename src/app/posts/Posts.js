import React from 'react';
import { Link } from 'react-router';
import dataService from "src/app/services/dataServices";
import helperService from '../services/helperService';

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts: null};
    }

    componentWillMount() {
        dataService.getData('http://localhost:9001/posts')
            .then(
                (posts) => {
                    this.setState({posts: helperService.sortPosts(posts)});
                },
                (error) => {
                    console.log(error);
                });
    }

    render() {
        if(!this.state.posts) {
            return( <div>Loading...</div>);
        }
        return(
            <div>
                {(this.state.posts).map((post) => {
                    return (
                        <div className="post-container" key={'postWrapper' + post.id}>
                            <Link to={`/posts/${post.id}`}>Title: {post.title}</Link>
                            <div>Author: {post.author}</div>
                            <div>Date: {post.publish_date}</div>
                            <div>Description: {post.description}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}