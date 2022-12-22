import React, { Component } from 'react'
import './style.css';
export default class index extends Component {
    render() {
        return (
            <div className='counter-box'>
            <p>{this.props.count}</p>
            <button onClick={()=>this.props.onDecrement(this.props.id,this.props.steps)} className="btn dec-btn">-</button>
            <button onClick={()=>this.props.onIncrement(this.props.id,this.props.steps)} className="btn inc-btn">+</button>
        </div>
        )
    }
}
