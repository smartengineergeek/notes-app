import React from 'react';

import Note from './Note/Note';
import './Notes.css';

class Notes extends React.Component{
    clickHandler = () => {
        document.getElementById("myModal").style.display = "block";
    }
    render(){
        return(
            <div className="tasks">
                <div className="tasks-selected-for-development tasks-col">
                    <p className="tasks-type">Selected</p>
                    <div className="tasks-list">
                        <Note clickHandler={this.clickHandler} />
                        <Note clickHandler={this.clickHandler} />
                        <Note clickHandler={this.clickHandler} />
                    </div>
                </div>
                <div className="tasks-inprogress tasks-col">
                    <p className="tasks-type">InProgress</p>
                    <div className="tasks-list">
                        <Note />
                        <Note />
                        <Note />
                    </div>
                </div>
                <div className="tasks-done tasks-col">
                    <p className="tasks-type">Done</p>
                    <div className="tasks-list">
                        <Note />
                        <Note />
                        <Note />
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;