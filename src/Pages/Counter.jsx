import React, { Component } from 'react'
import Counters from '../Component/Counters';
const data =[
    {id:1,count:0,steps:1},
    {id:2,count:0,steps:5},
    {id:3,count:0,steps:9},
    {id:4,count:0,steps:6},
]
export default class Counter extends Component {
    state ={
        data ,
        total: data.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)
    };

    getTotal = (step) => {
        this.setState(prevState => ({total : prevState.total + step}))
    }

    onIncrement = (id,steps=1) =>{
        this.setState(prevState =>{
            return{
                data:prevState.data.map(item=>{
                    if(item.id === id){
                        return {...item,count:item.count+steps};
                    }
                    return item;
                }),
                total : prevState.total + steps
            }}
        );
    }

    onDecrement = (id,steps=1) =>{
        this.setState(prevState =>{
            return{
                data:prevState.data.map(item=>{
                    if(item.id === id && item.count>0){
                            return {...item,count:item.count-steps};
                    }
                    return item;
                }),
                
                total : this.state.total >0 ? prevState.total - steps : prevState.total
                
            }}
        );
    }
    render() {
        return (
            <div>
                {this.state.data.map(item => {
                    return <Counters key={item.id} {...item} onIncrement={this.onIncrement} onDecrement={this.onDecrement} getTotal={this.getTotal}/>
                })}
                <p>Total : {this.state.total}</p>
            </div>
        )
    }
}
