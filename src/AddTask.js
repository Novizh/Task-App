import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        title: ''
    }
    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Task</label>
                    <input type="text" onChange={this.handleChange} value={this.state.title}/>
                </form>
            </div>
        )
    }
}

export default AddTask;