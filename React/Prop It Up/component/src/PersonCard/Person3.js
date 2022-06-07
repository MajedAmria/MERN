import React, { Component } from 'react';

class Person3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    increment = () => {
     this.setState({ 
         age : this.state.age+=1
        });
    }
    rest = () => {
        this.setState({ 
            age : this.props.age
           });
       }
    render() {
        return <div>
            <h1>{this.props.firstName },{ this.props.lastName }</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.increment}>Birthday Button {this.props.firstName} { this.props.lastName }</button>
            <p></p>
            <button onClick={this.rest}>Rest</button>
            </div>;
    }
}
    
export default Person3;