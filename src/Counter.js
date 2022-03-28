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

    incrementcallback()
    {
        this.setState({count:this.state.count+1}, ()=>{console.log("Ince");this.decrementCall()})
    }

    decrement()
    {
        this.setState({count: this.state.count-1})
    }
    decrementCall()
    {
        console.log("Dec");
        this.setState({count: this.state.count-5})
    }
    incrementFive()
    {
        this.incrementprev();
        this.incrementprev();
        this.incrementprev();
        this.incrementprev();
        this.incrementprev();

    }
    incrementprev()
    {
        this.setState((prev)=>({
count:prev.count+1
        }))
    }
  render() {
    return (
      <div>Counter{this.state.count}
      <button onClick={()=>this.increment()}>inc</button>
      <button onClick={()=>this.decrement()}>dec</button>
      <button onClick={()=>this.incrementcallback()}>incCAllback</button>
      <button onClick={()=>this.incrementFive()}>inc5</button>

      </div>
    )
  }
}

export default Counter