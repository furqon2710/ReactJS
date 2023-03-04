import React from 'react'
import NotesItem from './NotesItem'

function NotesActive({notes, onDelete, onArchive, showFormattedDate}){
    // console.log(notes)
    if(notes.find(note=>note.archived===false)){
        return(
            <div className="notes-list">
            {
                notes.map((notes) => (
                    <NotesItem
                    key = {notes.id}
                    id= {notes.id}
                    onDelete = {onDelete}
                    showFormattedDate={showFormattedDate}
                    onArchive={onArchive}
                    {...notes} />
                ))
            }
            </div>
        )
    }else{
        return(
            <div className="notes-list__empty-message">Active Notes is empty</div>
        )
    }
    // console.log(isArchived)
    // console.log(activeNotes)
    
}

export default  NotesActive