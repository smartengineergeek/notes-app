import React from 'react';
import './Note.css';

const Note = props => (
    <div className="single-note">
        <p className="single-note-heading">note heading</p>
        <p className="single-note-description">
        Renaming the folder fixed the problem for me. If your repo has a folder or file name the same as a branch name then you will need to: git checkout 
        </p>
        <button className="single-note-view-button" onClick={props.clickHandler}>View</button>
    </div>
)

export default Note;