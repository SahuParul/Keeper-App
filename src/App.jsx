import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx"
import './App.css'
import CreateArea from "./CreateArea.jsx";
import { useState } from "react";
import "./style.css";


function App() {

 const [ notes, setNotes ] = useState([]);
   
  function addNote(newNote){
  setNotes(prevNotes =>{
    return [...prevNotes,newNote];
  });
  }

  function deleteNote(id){
   setNotes(prevNotes =>{
    return prevNotes.filter((noteItem, index) =>{
      return index!==id;
    });
   });
  }

  return (
    <>
     <Header/>
     <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index)=>{
      return <Note
      key={index}
      id={index}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}/>
     })}
     <Footer/>
    </>
  )
}

export default App
