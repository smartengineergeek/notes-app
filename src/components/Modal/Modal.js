import React from 'react';

import './Modal.css';

class Modal extends React.Component{
    componentDidMount(){
        let thisRef = this;
        window.onclick = function(event) {
            let modal = document.getElementById("appModal");
            if (event.target == modal) 
                thisRef.props.callbackModal("close", "");
        }
    }
    render(){
        return(
            <div id="appModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={() => this.props.callbackModal("close", "")}>&times;</span>
                    <h3 className="text-center">Task Details</h3>
                    <div className="task-body">
                        <h4>Id - <span id="modal-id" />{this.props.data.id}</h4>
                        <h4>Heading - <span id="modal-heading" />{this.props.data.heading}</h4>
                        <p>Description - <span id="modal-description" />{this.props.data.description}</p>
                        <button className="function-button">Edit</button>
                        <button className="danger-button" onClick={() => this.props.callbackModal("delete", this.props.data.id)}>Delete</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Modal;