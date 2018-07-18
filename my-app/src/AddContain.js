import React, { Component } from 'react';
import logo from './logo.svg';


export default class AddContain extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }


    addfunction = () => {
        {
            console.log("af");
            this.setState({
                count: this.state.count + 1
            });
        }
    }

    deletfunction = () => {
        {
            console.log("af");
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.addfunction}>+</button>
                <button onClick={this.deletfunction}>-</button>
                <span>containAdd {this.state.count}</span></div>
        );
    }
}