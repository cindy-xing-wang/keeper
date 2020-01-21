import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const [note,setNote]=useState({title:'',content:''});
    const [expand,setExpand]=useState(false);
    
    function handleClick(){
        setExpand(true);
    }
    function handleChange(e){
        const {value,name}=e.target;
        setNote(pre=>{
            return {...pre,
            [name]: value
            };
        });
    }
function handleSubmit(e){
    e.preventDefault();
    if(!note){return;}
    else {props.addNote(note);}
    
    setNote({title:'',content:''});

}

    return(<div>
    <form className='create-note'>
        {expand && <input onChange={handleChange} value={note.title} name='title' placeholder='Title' />}
        <textarea onClick={handleClick} onChange={handleChange} value={note.content} name='content' placeholder='Take a note...' row={expand?'3':'1'} />
        <Zoom in={expand}>
        <Fab onClick={handleSubmit}>
        <AddIcon />
        </Fab>
        </Zoom>
    </form>
    </div>);
}

export default CreateArea;