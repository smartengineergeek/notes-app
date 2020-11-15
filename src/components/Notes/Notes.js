import React from 'react';

import Note from './Note/Note';
import './Notes.css';

class Notes extends React.Component{
    clickHandler = note => {
        document.getElementById("myModal").style.display = "block";
        document.getElementById("modal-id").innerHTML = note.id;
        document.getElementById("modal-heading").innerHTML = (note.heading).toUpperCase();
        document.getElementById("modal-description").innerHTML = note.description;
    }
    onDragStart(event) {
        event.dataTransfer.effectAllowed = "move";
        console.log(" drag start ", event.target.getAttribute('id'))
        event.dataTransfer.setData("text", event.target.getAttribute('id'));
        // event.currentTarget.style.backgroundColor = "#e9c46a";
    }  
    onDragEnd(event) {
        // event.currentTarget.style.backgroundColor = "#2a9d8f";
    }      
    onDragOver(event) {
        event.preventDefault();
    }      
    onDrop = (event) => {
        if((event.target.className).includes('drop-from-selected')){
            // selected
            let dropzone = document.getElementById("dropzone-inprogress");
      
            let id = event.dataTransfer.getData("text");
            // console.log(" event class ", event.target.className, " id ", id);
            
            if(id != ""){
                const draggableElement = document.getElementById(id);
                const clone = draggableElement.cloneNode(true);
            
                // dropzone.appendChild(clone);
                if(localStorage.getItem("tasks-app")){
                    let tasks = JSON.parse(localStorage.getItem("tasks-app"));
                    for(let task of tasks){
                        if((task.id).toString() === id.split("-")[1])
                            task.status = "inprogress";                     
                    }
                    localStorage.setItem("tasks-app", JSON.stringify(tasks));
                }
                if(document.getElementById(id.split("-")[1]) != undefined)
                    document.getElementById(id.split("-")[1]).remove();
            }
        }else if((event.target.className).includes('drop-from-inprogress')){
            // inprogress
            let dropzone = document.getElementById("dropzone-done");
      
            let id = event.dataTransfer.getData("text");
            // console.log(" event class ", event.target.className, " id ", id);
    
            if(id != ""){
                const draggableElement = document.getElementById(id);
                const clone = draggableElement.cloneNode(true);
            
                // dropzone.appendChild(clone);
                if(localStorage.getItem("tasks-app")){
                    let tasks = JSON.parse(localStorage.getItem("tasks-app"));
                    for(let task of tasks){
                        if((task.id).toString() === id.split("-")[1])
                            task.status = "done";                     
                    }
                    localStorage.setItem("tasks-app", JSON.stringify(tasks));
                }
                if(document.getElementById(id.split("-")[1]) != undefined)
                    document.getElementById(id.split("-")[1]).remove();
            }
        }
      
       event.dataTransfer.clearData();        
       this.forceUpdate();
    }

    render(){
        let notes = JSON.parse(localStorage.getItem("tasks-app"));
        return(
            <div className="tasks">
                <div className="tasks-selected tasks-col">
                    <p className="tasks-type">Selected For Development</p>
                    <div className="tasks-list">
                        {notes != null && notes.map(note => (
                            <React.Fragment key={note.id}>
                            {(note.status === "selected") &&
                                <div id={`outerdiv-${note.id}`} draggable="true" onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                                    <Note clickHandler={this.clickHandler} note={note} />
                                </div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="tasks-inprogress tasks-col">
                    <p className="tasks-type">InProgress</p>
                    <div className="tasks-list">
                        <div id="dropzone-inprogress" className="on-drop drop-from-selected" onDragOver={this.onDragOver} onDrop={this.onDrop}></div>
                        {notes != null && notes.map(note => (
                            <React.Fragment key={note.id}>
                            {(note.status === "inprogress") &&
                                <div id={`outerdiv-${note.id}`} draggable="true" onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                                    <Note clickHandler={this.clickHandler} note={note} />
                                </div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="tasks-done tasks-col">
                    <p className="tasks-type">Done</p>
                    <div className="tasks-list">
                        <div id="dropzone-done" className="on-drop drop-from-inprogress" onDragOver={this.onDragOver} onDrop={this.onDrop}></div>
                        {notes != null && notes.map(note => (
                            <React.Fragment key={note.id}>
                                {(note.status === "done") && <Note clickHandler={this.clickHandler} note={note} />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;