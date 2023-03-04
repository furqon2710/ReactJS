import React from "react";
import NotesBody from "./NotesBody";
import NotesButton from "./NotesButton";
import NotesTitle from "./NotesTitle";

function NotesItem({id,tag,onDelete,onArchive,title,body,createdAt, showFormattedDate,archived}){
    // console.log(createdAt)
    // console.log(archived)
    if(archived===false){
        return(
            <div className="note-item">
                <div className="note-item__content">
                    <NotesTitle date={createdAt} title={title} showFormattedDate={showFormattedDate}/>
                    <NotesBody text={body}/>
                </div>
                <NotesButton id={id} onArchive={onArchive} onDelete={onDelete} />
            </div>
        )
    }else{
        return
    }
    
}

export default NotesItem