import React, { Component } from 'react';
import Post from './post';

export default class PostList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.ghostpost.map(messages =>
                    <Post
                    id={messages.id}
                    title={messages.title}
                    body={messages.body}
                    created_on={messages.created_on}
                    total_count={messages.total_count}
                    />
                )}
            </React.Fragment>
        )
    }
}