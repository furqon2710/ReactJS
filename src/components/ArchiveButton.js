import React from "react";

function  ArchiveButton({id,onArchive,archived}){
    if(archived===true){
        return(
            <button className="note-item__archive-button" onClick={()=>onArchive(id)}>Pindahkan</button>
            )
    }
    return(
        <button className="note-item__archive-button" onClick={()=>onArchive(id)}>Arsipkan</button>
    )
}
export default ArchiveButton