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
        total: 0,
    };

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
        let isDec=false;
        this.setState(prevState =>{
            return{
                data:prevState.data.map(item=>{
                    if(item.id === id && item.count>0){
                        isDec=true;
                            return {...item,count:item.count-steps};
                    }
                    return item;
                }),
                
                total : isDec? prevState.total - steps : prevState.total
                
            }}
        );
    }
    render() {
        return (
            <div>
                {this.state.data.map(item => {
                    return <Counters key={item.id} {...item} onIncrement={this.onIncrement} onDecrement={this.onDecrement}/>
                })}
                <p>Total : {this.state.total}</p>
            </div>
        )
    }
}
