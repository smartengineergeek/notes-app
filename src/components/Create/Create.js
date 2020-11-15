import React from 'react';

import './Create.css';

class Create extends React.Component{
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
            successMessage: ""
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
        if(this.validation()){
            let tasks = [];
            if(localStorage.getItem("tasks-app"))
                tasks = JSON.parse(localStorage.getItem("tasks-app"));
            let task = {
                id: new Date().getTime(),
                heading: this.headingInputRef.value,
                description: this.descriptionInputRef.value,
                status: "selected"
            };
            tasks.push(task);
            localStorage.setItem("tasks-app", JSON.stringify(tasks));
            this.setState({successMessage: "data submitted"});
            //this.formInterval = setTimeout(() => {
          //      this.clearForm();
        //    }, 2000);
        }
    }

    render(){
        return(
            <div className="create">
                <form onSubmit={this.formHandler}>
                    <h3 className="heading">Create a New Task</h3>
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
                        <li className="form-row btn-row">
                            <button className="blue-button" type="button" onClick={this.clearForm}>Clear</button>                        
                            <button className="blue-button" type="submit">Submit</button>                        
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Create;