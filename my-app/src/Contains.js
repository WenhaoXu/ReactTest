import React, { Component } from 'react';
import logo from './logo.svg';
import AddContain from './AddContain';

export default class Contains extends Component {
    constructor(props) {
        super(props);
        this.state={
            size:props.num
        }
    }


    render(){
        const count=this.state.size;
        const list= Array.from({length: count},(v,k)=>k);
        return    <div>{list.map((li)=><AddContain/>)}</div>
    }
}
