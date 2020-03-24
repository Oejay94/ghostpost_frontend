import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            boast_or_roast: '',
            values: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.check : target.value;
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    handleTextChange = event => {
        this.setState({ value: event.target.value });
    };

    addPost = event => {
        event.preventDefault();
        fetch("http://localhost:8000/api/boastroast/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: event.target.children[0].control.value,
                boast_or_roast: event.target.children[2].control.checked
            })
        });
        window.location.reload()
    };

    render() {
        return(
            <form onSubmit={this.addPost}>
                <label>
                    Add Your Boast or Roast
                    <input
                    type='text'
                    name='body'
                    value={this.state.value}
                    onChange={this.handleTextChange}
                    />
                </label>
                <br />
                <label>
                    Is this a Boast?
                    <input
                    name='boast_or_roast'
                    type='checkbox'
                    checked={this.state.boast_or_roast}
                    onChange={this.handleInputChange}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}