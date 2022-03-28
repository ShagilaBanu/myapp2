import { Component } from "react";

class Statesample extends Component
{
    constructor(){
        super()
        this.state={
            message:'Welome',
            name: 'Friend'
        }
    }

    changeName()
    {
        this.setState({message:'Hi',
                        name: 'Banu'})
    }

    render()
    {
        return(
            <div>
                <h1> {this.state.message} {this.state.name}</h1>
                <button onClick={()=>this.changeName()}>Click</button>
            </div>
        )
    }
}
export default Statesample