import React from 'react'

export default function Commpletbtn(props) {
  return <>
    <div
      className={`d-flex align-items-center p-2 mb-2 rounded shadow-sm ${props.todo.complete ? "bg-success text-white" : "bg-danger text-white"
        }`}
    >
      <div
        onClick={props.togelComplet}
        className="flex-grow-1"
        style={{
          cursor: "pointer",
          textDecoration: props.todo.complete ? "line-through" : "none",
        }}
      >
        {props.todo.text}
      </div>
      <button
        onClick={props.onDelete}
        className="btn btn-light btn-sm text-danger ms-2"
      >
        X
      </button>

      
    </div>


  </>
}
