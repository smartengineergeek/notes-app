import React from 'react';
import './Note.css';

const Note = props => (
        <div className="single-note" id={props.note.id} >
            <p className="single-note-heading">{props.note.heading}</p>
            <p className="single-note-description">{props.note.description}</p>
            <button className="single-note-view-button" onClick={props.note.clickHandler}>View</button>
        </div>
)

export default Note;