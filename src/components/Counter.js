import React, { Component } from 'react'
import  './style.css'
const initialValue=0
export class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: initialValue
        }
    }
    
    increment=()=>{
        this.setState({count: this.state.count+1})
    }
    decrement=()=>{
        this.setState({count: this.state.count-1})
    }
    reset=()=>{
        this.setState({count: initialValue})
    }
    render() {
        return (
            <div className='main'>
                <h1>Counter App</h1>
                <h2>{this.state.count}</h2>
                <div className='buttons'>
                <button onClick={this.increment} className='counter' id='increment'>Add</button>
                <button onClick={this.decrement} className='counter' id='decrement'>Remove</button>
                <button onClick={this.reset} className='counter' id='reset'>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter
