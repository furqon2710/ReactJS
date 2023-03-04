import React from "react";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive"
import { getInitialData, showFormattedDate } from "../utils";
import AddNotes from "./AddNotes";

class NotesApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler =  this.onDeleteHandler.bind(this)
        this.onAddNotesHandler =  this.onAddNotesHandler.bind(this)
        this.onArchivesHandler = this.onArchivesHandler.bind(this)
    }
    onDeleteHandler(id){
        const notes =  this.state.notes.filter(notes => notes.id !== id);
        // console.log(notes)
        this.setState({notes})
        console.log(this.state.notes)

    }
    onAddNotesHandler({title,body}){
        // console.log({title})
        this.setState((prevState)=>{
            return {
                notes : [
                    ...prevState.notes,{
                        title:title,
                        body:body,
                        id: +new Date(),
                        createdAt : +new Date(),
                        archived:false
                    }
                ]
            }
        })
    }
    onArchivesHandler(id){
        const notes =  this.state.notes.map((item)=>{
            if(item.id===id){
                const updatedItem =  {
                    ...item,
                    archived : !item.archived
                }
                return updatedItem
            } return item
        })
        console.log(notes)
        this.setState({notes})
    }
    render(){
        return (
            <div className="notes-app">
                <div className="note-app__header">
                    <h1>Notes App</h1>
                    <div className="note-search">Cari</div>
                </div>
                <div className="note-app__body">
                    <AddNotes addNotes={this.onAddNotesHandler}/>
                    <h2>Notes Aktif</h2>
                    <NotesActive notes={this.state.notes} showFormattedDate={showFormattedDate} onDelete={this.onDeleteHandler} onArchive={this.onArchivesHandler}/>
                    <h2>Notes Arsip</h2>
                    <NotesArchive notes={this.state.notes} onDelete={this.onDeleteHandler} showFormattedDate={showFormattedDate} onArchive={this.onArchivesHandler}/>
                </div>
                
            </div>
        )
    }
}

export default NotesApp