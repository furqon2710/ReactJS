import React from 'react'
import ArchiveButton from './ArchiveButton'
import DeleteButton from './DeleteButton'

function NotesButton({id, onArchive, onDelete}){
    return(
        <div className="note-item__action">
            <ArchiveButton id={id} onArchive={onArchive} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}
export default NotesButton