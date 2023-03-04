import React from 'react'

class AddNotes extends React.Component {
    constructor(props){
        super(props);
        // inisialisasi state
        this.state = {
            title:'',
            body:'',
            char_left:50
        }
        this.onTitleChangeEventHandler =  this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler =  this.onSubmitEventHandler.bind(this)
    }
    onTitleChangeEventHandler(event){
        if(event.target.value.length<=50){
            this.setState(()=>{
                return{
                    title:event.target.value,
                    char_left:50-event.target.value.length
                }
        })
    }}
    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body:event.target.value
            }
        })
    }
    onSubmitEventHandler(event){
        // console.log(this.state.title)
        // console.log(this.state.body)
        event.preventDefault();
        console.log(this.state)
        this.props.addNotes(this.state);
        console.log('hit add notes')
    }
    render(){
        return(
            <div className="note-input">
                <h2>Add Notes</h2>
            <form action="" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa Karakter : {this.state.char_left}</p>
                <input type="text" placeholder="Write Title Here.." className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                <textarea className='note-input__body' type="text" placeholder='Write Notes...' value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                <button type='submit'>Tambah</button>
            </form>
            </div>
        )
    }
}
export default AddNotes