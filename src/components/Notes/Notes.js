import React from 'react';

import Note from './Note/Note';
import './Notes.css';

class Notes extends React.Component{
    clickHandler = () => {
        document.getElementById("myModal").style.display = "block";
    }
    render(){
        let notes = JSON.parse(localStorage.getItem("notes-app-data"));
        return(
            <div className="tasks">
                <div className="tasks-selected-for-development tasks-col">
                    <p className="tasks-type">Selected</p>
                    <div className="tasks-list">
                        {notes != null && notes.map(note => (
                            <React.Fragment>
                            {(note.status === "selected-for-development") &&
                                <Note clickHandler={this.clickHandler} heading={note.heading} description={note.description} />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="tasks-inprogress tasks-col">
                    <p className="tasks-type">InProgress</p>
                    <div className="tasks-list">
                        {notes != null && notes.map(note => (
                            <React.Fragment>
                            {(note.status === "inprogress") &&
                                <Note clickHandler={this.clickHandler} heading={note.heading} description={note.description} />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="tasks-done tasks-col">
                    <p className="tasks-type">Done</p>
                    <div className="tasks-list">
                        {notes != null && notes.map(note => (
                                <React.Fragment>
                                {(note.status === "done") &&
                                    <Note clickHandler={this.clickHandler} heading={note.heading} description={note.description} />}
                                </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;