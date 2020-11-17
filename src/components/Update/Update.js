import React from 'react';
import { withRouter } from 'react-router-dom';

import './Update.css';
import spinner from '../spinner.gif';

class Update extends React.Component{
    constructor(props){
        super(props);
        this.headingInputRef = React.createRef();
        this.descriptionInputRef = React.createRef();
        this.formHandler = this.formHandler.bind(this);
        this.formInterval = null;
        this.state={
            headingError: "",
            descriptionError: "",
            hasError: false,
            successMessage: "",
            failureMessage: "",
            taskId: "",
            isLoading: false
        }
    }

    componentDidMount(){
 //       console.log(" this.props ", this.props);
        if((this.props.location.pathname).split("/")[2] != ""){
            this.setState({ taskId: (this.props.location.pathname).split("/")[2]});
            console.log((this.props.location.pathname).split("/")[2]);
            let id = (this.props.location.pathname).split("/")[2];
            let tasks = JSON.parse(localStorage.getItem("tasks-app"));
            if(tasks != null){
                let task = tasks.filter(data => (data.id).toString() === id);
                if(task[0] != undefined){
                    this.headingInputRef.value = task[0].heading;
                    this.descriptionInputRef.value = task[0].description;    
                }
            }
        }
    }
    componentWillUnmount(){
        //clearTimeout(this.formInterval);
    }

    validation = () => {
        let isValid = true;
        let updateState = { headingError: "", descriptionError: ""};
        if(this.headingInputRef.value === ""){
            updateState.headingError = "please add heading"
            isValid = false;
        }
        
        if(this.descriptionInputRef.value === ""){
            updateState.descriptionError = "please add description";
            isValid = false;
        }
        updateState.hasError = !isValid;
        this.setState({ ...updateState });
        
        return isValid;
    }

    clearForm = () => {
        this.headingInputRef.value = "";
        this.descriptionInputRef.value = "";
        this.setState({ headingError: "", descriptionError: "", hasError: false, successMessage: ""});
    }

    formHandler(e){
        e.preventDefault();
        this.setState({isLoading: true});
        if(this.validation()){
            let tasks = [];
            if(localStorage.getItem("tasks-app"))
                tasks = JSON.parse(localStorage.getItem("tasks-app"));
            let isTaskIdValid = false;            
            tasks.forEach(task => {
                if((task.id).toString() === this.state.taskId){
                    isTaskIdValid = true;
                    task.updatedDate = new Date();
                    task.heading = this.headingInputRef.value;
                    task.description = this.descriptionInputRef.value;
                }
            })
            localStorage.setItem("tasks-app", JSON.stringify(tasks));
            if(isTaskIdValid)  this.setState({successMessage: "data updated" });
            else this.setState({failureMessage: "task id does not exist" });
        }
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000);
    }

    render(){
        return(
            <div className="create">
                <form onSubmit={this.formHandler}>
                <h3 className="heading">Update Task Id {this.state.taskId}</h3>
                    <ul className="wrapper">
                        <li className="form-row">
                            <label>Heading</label><br/>
                            <textarea rows="3" cols="50" ref={input => this.headingInputRef = input} />
                        </li>
                        <li className="form-row">
                            <label>Description</label>
                            <textarea rows="4" cols="100"  ref={input => this.descriptionInputRef = input} />
                        </li>
                        {this.state.hasError && <li className="form-row">
                            <div className="error">{this.state.headingError} {this.state.descriptionError}</div>        
                        </li>}
                        {this.state.successMessage && <li className="form-row">
                            <div className="success">{this.state.successMessage}</div>        
                        </li>}
                        {this.state.failureMessage && <li className="form-row">
                            <div className="error">{this.state.failureMessage}</div>        
                        </li>}
                        <li className="form-row btn-row">
                            <button className="blue-button" type="button" onClick={this.clearForm}>Clear</button>                        
                            {!this.state.isLoading ? <button className="blue-button" type="submit">Update</button>:
                            <img src="" alt="loading..." className="loader" />}                        
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default withRouter(Update);