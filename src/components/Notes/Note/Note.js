import React from 'react';
import './Note.css';

const Note = props => (
    <div className="single-note">
        <p className="single-note-heading">{props.heading}</p>
        <p className="single-note-description">
        {props.description}
        </p>
        <button className="single-note-view-button" onClick={props.clickHandler}>View</button>
    </div>
)

export default Note;