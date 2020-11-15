import React from 'react';
import './Note.css';

import {trimString} from '../../../utils';

const Note = props => (
        <div className="single-note" id={props.note.id} >
            <p className="single-note-heading">{(props.note.heading).toUpperCase()}</p>
            <p className="single-note-description">{trimString(props.note.description)}</p>
            <button className="single-note-view-button" onClick={() => props.clickHandler(props.note)}>View</button>
        </div>
)

export default Note;