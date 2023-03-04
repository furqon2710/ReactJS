import React from "react"

function NotesTitle({title,id,showFormattedDate,date}){
    return(
        <div className="note-item__title">
            <h3 className="notes-item__title">{title}</h3>
            <p className="notes-item__date">{showFormattedDate(date)}</p>
        </div>
    )
}
export default NotesTitle