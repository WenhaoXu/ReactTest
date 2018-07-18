import React, {Component} from 'react';
import logo from './logo.svg';
import AddContain from './AddContain';

export default class Contains extends Component {
    constructor(props) {
        super(props);
        this.ininvalue = Array.from({length: props.counterNum}, (v, k) => 0);
        const initSum=this.ininvalue.reduce((x,y)=>x+y);
        this.state = {
            size: props.counterNum,
            summary:initSum
        }
    }

    onCounterUpdate=(newValue, previousValue)=> {
        const valueChange = newValue - previousValue;
        // 触发state值的改变，引发重新渲染。
        this.setState({
            summary: this.state.summary + valueChange
        })
    }

    render() {
        const count = this.state.size;
        const list = Array.from({length: count}, (v, k) => 0);

        return (<div>
                <div>{list.map((li) => <AddContain num={0} onUpdate={this.onCounterUpdate} />)}</div>
                <div> sumary:{this.state.summary}</div>
            </div>
        )
    }
}