import React, { Component } from 'react'

export class Child extends Component {
  render(props) {
    return (
      <div>Child
          <button onClick={this.props.childhandler}>Click Child</button>
          <button onClick={()=>this.props.childhandler('HI Shagila')}>Click Revert Child</button>
      </div>
    )
  }
}

export default Child