import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor()
    {
        super()
        this.state={message:'hi'}
        this.parenthandler=this.parenthandler.bind(this)
    }
    
    parenthandler(childname){
        this.setState({
            message: 'hi banu murali'+ childname
        })
    }
  render() {
    return (
      <div>Parent {this.state.message}
      <Child childhandler ={this.parenthandler}></Child>
      </div>
    )
  }
}

export default Parent