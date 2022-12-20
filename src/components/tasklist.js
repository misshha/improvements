import React from "react";
import Task from "./task";
import FormTask from "./form-task";
import "../styles/index.css"

class TaskList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          form: false,
          blocks: [
            {
              id: 1,
              text: "some task",
              time: "12-00",
            },
            {
              id: 2,
              text: "okay",
              time: "13-00",
            }
          ]
        }
        this.addForm = this.addForm.bind(this)
        this.addTask = this.addTask.bind(this)
    }
    
    render(){
        return (
            <div className='task-list'>
              {this.state.blocks.map(
                  (el) => (
                    <Task key={el.id} text={el.text} time={el.time} />
                  )
              )}
              {this.state.form !== false ? <FormTask  onAdd={this.addTask} addForm={this.addForm}/> : <button onClick={this.addForm} className='add-btn'>+ new task</button>}
            </div>
        )
    }
    
    addTask(task){
      task.id = this.state.blocks.length + 1
      this.setState({blocks: [...this.state.blocks, task]})
    }

    addForm(){
        this.setState({form: !this.state.form})
    }
}

export default TaskList