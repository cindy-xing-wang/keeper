import React, { useState } from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';

function App() {
 const [notes, setNotes]= useState([]);   
    function addNote(note){
        setNotes(pre=>
            [...pre, note]
        );
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
        <div>
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
        </div>
    );
}

export default App;