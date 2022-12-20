import React from "react"
import { AiOutlineClose} from "react-icons/ai";

class FormTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: "",
            time: ""
        }
    }
    render(){
        return(
            <div className="form-task">
                    <div className="container">
                        <AiOutlineClose className="icon-close" onClick={this.props.addForm}/>
                    </div>
                    <div className="input-block">
                        <input className="form-text" placeholder="Task name" onChange={(e) => this.setState({ text: e.target.value })} />
                        <input className="form-time" placeholder="e.g.12:00 " onChange={(e) => this.setState({ time: e.target.value })} />
                    </div>
                    <button className="form-btn" onClick={() => this.someFunc(this.state)}>Add</button>
            </div>
        )
    }

    someFunc(data){
        this.props.onAdd(data)
        this.props.addForm();
    }
}

export default FormTask