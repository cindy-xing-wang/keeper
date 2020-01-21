import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Note({noteItem,index,onComplete,onDelete}){
  function handleClick(){
    onComplete(index)
  }

  function handleDelete(){
    onDelete(index)
  }
  return (<div style={{textDecoration: noteItem.isComplete?'line-through':''}} className='note'>
    <h1>{noteItem.title}</h1>
    <p>{noteItem.content}</p>
    <button onClick={handleClick}>
    <CheckCircleOutlineIcon />
    </button>
    <button onClick={handleDelete} >
    <DeleteIcon />
    </button>
  </div>);
}

export default Note;