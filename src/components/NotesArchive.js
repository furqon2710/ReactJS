import React from "react";
// import ArchivesItem from "./ArchivesItem";
import ArchivesItem from "./ArchivesItem"
function NotesArchive({notes, onDelete,showFormattedDate, onArchive}){
    // console.log(archives)

    if(notes.find(note=>note.archived===true)){
        return(
            <div className="notes-list">
            {
                notes.map((notes) => (
                        <ArchivesItem
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
            <div className="notes-list__empty-message">Notes Archive is not found</div>
        )
    }
}

export default NotesArchive