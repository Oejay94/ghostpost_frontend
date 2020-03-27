import React, { Component } from 'react';
import Post from './post';
import Nav from './nav';

export default class PostList extends Component {

    render() {
        return (
            <React.Fragment>
                <Nav />
                {this.props.ghostpost.map(messages =>
                    <Post
                    id={messages.id}
                    body={messages.body}
                    created_on={messages.created_on}
                    total_count={messages.total_count}
                    />
                )}
            </React.Fragment>
        )
    }
}