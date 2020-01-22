import React, { useState } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';
import axios from 'axios';


function App() {
 const [notes, setNotes]= useState([]);   
    function addNote(note){
        setNotes(pre=>
            [...pre, note]
        );
        axios.post('http://localhost:3000',notes)
        .then(res =>console.log(res.data));
        
    }
    
    function onComplete(index){
        const newNotes=[...notes];
        newNotes[index].isComplete=true;
        setNotes(newNotes);
        // setNotes(pre=>{
        //     pre[index].isComplete= true;
        //     return setNotes(pre);
        // });
    }

    function onDelete(id){
        setNotes(pre=>{
            return pre.filter((note,index)=>
                index!==id
            );
        });
    }

    return (
         <Router>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map((noteItem,index)=>(
                <Note 
                key={index}
                index={index}
                noteItem={noteItem}
                // title={noteItem.title}
                // content={noteItem.content}
                // isComplete={noteItem.isComplete}
                onComplete={onComplete}
                onDelete={onDelete}
                />
            ))}
            
            <Footer />
       </Router> 
    );
}

export default App;