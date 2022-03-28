import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment()
    {
        this.setState({count:this.state.count+1})
    }
    decrement()
    {
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>Counter{this.state.count}
      <button onClick={()=>this.increment()}>inc</button>
      <button onClick={()=>this.decrement()}>dec</button>

      </div>
    )
  }
}

export default Counter