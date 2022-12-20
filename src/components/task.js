import React from "react"

class Task extends React.Component{
    render(){
        return(
            <div className="task">
                <span>{this.props.text}</span>
                <span className="time">{this.props.time}</span>
            </div>
        )
    }
}

export default Task