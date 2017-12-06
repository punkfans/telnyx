import React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component {
  render() {
    return (
        <div className="nav-bar-container">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <Link to={`/home`} className="nav-link" activeClassName="active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/about`} className="nav-link" activeClassName="active">About</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/posts`} className="nav-link" activeClassName="active">Posts</Link>
                </li>
            </ul>
        </div>
    );
  }
}