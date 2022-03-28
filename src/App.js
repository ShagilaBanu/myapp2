
import './App.css';
import {Component} from 'react';
import Greet from './GreetFunction';
import GreetProp from './GreetFunctionProp';
import GreetClass from './GreetClass';
import ClassProp from './ClassProp';
import ArrowFunction from './ArrowFunction';
import Statesample from './Statesample';
import Counter from './Counter';
import Parent from './Parent';

class App extends Component{
  
  render(){
  return (
 <div className="App"> 
<Greet/>
<GreetProp name="Shagila"/>
<GreetProp name="Shagila" lastName="Banu"/>
<GreetClass/>
<ClassProp name="Shagila" lastName="Banu"/>
<ArrowFunction/>
<Statesample></Statesample>
<Counter></Counter>
<Parent/>
          </div>
  );
}
}

export default App;
