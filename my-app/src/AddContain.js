import React, { Component } from 'react';
import logo from './logo.svg';


export default class AddContain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.num

        };
    }


    addfunction = () => {
        {
            console.log("af");
            const previousValue=this.state.count;
            const newValue=previousValue+1;
            this.setState({
                count: newValue
            });
            this.props.onUpdate(newValue,previousValue);
        }
    }

    deletfunction = () => {
        {
            console.log("af");
            const previousValue=this.state.count;
            const newValue=previousValue-1;
            this.setState({
                count: newValue
            });
            this.props.onUpdate(newValue,previousValue);
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