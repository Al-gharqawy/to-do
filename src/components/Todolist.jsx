import  { React ,useState } from 'react'
import shortid from 'shortid';
export default function Todolist(props) {

    const [text , setText]= useState('')


function handelSubmit(e){

   e.preventDefault();

   props.onSubmit({
    id:shortid.generate(),
    text : text,
    complete: false,
   })
   setText("")

}
function handelChange (e){
  setText(e.target.value)
}
  return <>
  
  <form onSubmit={handelSubmit}>
    <input 
    className='input' 
    type="text" 
    onChange={handelChange}
    value ={text}
    />
    <button className='btn btn-success btn-sm m-2' onClik = {handelSubmit}> To-Do-List </button>
  </form>
  
  </>
}
