import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    /* useState is a built in React function that
    gets the current state of the page.
    It returns an array of two(2) values:
        1st = boolean
        2nd = function that sets the value of the 1st 
    */
  const [isModalOpen, setModalToOpen] = useState(false);

  function deleteHandler() {
    setModalToOpen(true);
  }

  function closeModalHandler() {
    setModalToOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Modal onClick={closeModalHandler}/>}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
