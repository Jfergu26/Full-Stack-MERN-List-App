import React, { Component } from 'react'

export default class Addtodo extends Component {
    render(){
        return(
            <form>
              <input type="text" className="form-control rounded-0" placeholder="Write your todo here!"></input>  
              <button className="form-control rounded-0 btn-secondary" type="submit">Add ToDo</button>
            </form>
        )
    }
}