import React, { Component } from 'react';

class Person2 extends Component {
    render() {
        return <div>
            <h1>{ this.props.firstName },{ this.props.lastName }</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            </div>;
    }
}
    
export default Person2;