import React from "react";

function  DeleteButton({id,onDelete}){
    // console.log('hit button')
    return(
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
    )
}
export default DeleteButton