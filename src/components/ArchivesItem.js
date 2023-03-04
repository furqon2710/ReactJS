import React from "react";
import NotesBody from "./NotesBody";
import DeleteButton from "./DeleteButton";
import NotesTitle from "./NotesTitle";
import ArchiveButton from "./ArchiveButton"
function NotesItem({id,onDelete,onArchive,title,body,createdAt, showFormattedDate,archived}){
    // console.log(createdAt)
    // console.log(archived)
    if(archived===true){
        return(
            <div className="note-item">
                <div className="note-item__content">
                    <NotesTitle date={createdAt} title={title} showFormattedDate={showFormattedDate}/>
                    <NotesBody text={body}/>
                </div>
                <div className="note-item__action">
                    <ArchiveButton id={id} onArchive={onArchive} archived={archived}/>
                    <DeleteButton id={id} onDelete={onDelete}/>
                </div>
            </div>
        )
    }else{
        return
    }
    
}

export default NotesItem