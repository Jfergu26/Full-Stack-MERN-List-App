import React, { Component } from 'react'

export default class Todo extends Component{
    //This component gives the visuals for each entry added to the to do list
    render(){

        const{title} = this.props.todo // retrieving titles from todo object

        return(
            <h3 className="text-dark text-center p-1 bg-light border-bottom">
                    <i className="far fa-times-circle fa-sm float-left m-1 text-danger "></i>{title}
                <input type="checkbox" className="m-2 float-right"></input>
            </h3>
        )
    }
}