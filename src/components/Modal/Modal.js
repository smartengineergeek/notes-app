import React from 'react';

import './Modal.css';

class Modal extends React.Component{
    componentDidMount(){
        window.onclick = function(event) {
            let modal = document.getElementById("myModal");
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }
    }
    closeHandler = () => {
        document.getElementById("myModal").style.display = "none";
    }
    render(){
        return(
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <span className="close" onClick={this.closeHandler}>&times;</span>
                    <h3 className="text-center">Task Details</h3>
                    <div className="task-body">
                        <h4>Id - <span id="modal-id" /></h4>
                        <h4>Heading - <span id="modal-heading" /></h4>
                        <p>Description - <span id="modal-description" /></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Modal;