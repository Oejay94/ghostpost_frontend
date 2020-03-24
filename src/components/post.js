import React, { Component } from 'react';

export default class Post extends Component {
    state = {
        id: 0
    }

    handleUpvote = event => {
        let payload = this.props.id
        fetch('http://localhost:8000/api/boastroast/' + payload + '/upvote')
            .then(res => res.json())
            .then(data => {
                this.setState({like: data})
                window.location.reload()
            })
    }

    handleDownvote = event => {
        let payload = this.props.id
        fetch('http://localhost:8000/api/boastroast/' + payload + '/downvote')
            .then(res => res.json())
            .then(data => {
                this.setState({like: data})
                window.location.reload()
            })
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body} - {this.props.created_on} </p> <br />
                    <button onClick={this.handleUpvote}>Upvote</button>
                    <button onClick={this.props.handleDownvote}>Downvote</button>
                    <p>{this.props.total_count}</p>
                </div>
                <br />
            </React.Fragment>
        )
    }
}