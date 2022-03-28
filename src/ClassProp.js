import React, {Component} from 'react';
class ClassProp extends Component
{
    render()
    {
        return <h1>Greet Class with prop {this.props.name} {this.props.lastName}</h1>;
    }
}
export default ClassProp;