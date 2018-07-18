import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddContain from './AddContain';
import  Contains from  './Contains'
class App extends Component{



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Contains counterNum="5"  />

      </div>
    );
  }
}



// class AddContain   extends Component{
//   constructor  (){
//     super();
//     this.state={
//       count:0
//     };
//   }
//     //  getCount(){
//     //    return this.state.count;
//     //  }
//
//    addfunction=() =>{{
//     console.log("af");
//     this.setState({
//       count: this.state.count+1
//     });}
// }
//
// deletfunction=() =>{ {
//   console.log("af");
//   this.setState({
//     count: this.state.count-1
//   });}
// }
//
// render(){ return  (
//   <div >
//   <button  onClick={this.addfunction}>+</button> <button onClick={this.deletfunction}>-</button><span>containAdd {this.state.count}</span></div>
//  );}
//
//
// }



export default App;
