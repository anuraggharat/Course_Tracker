import React, { useState } from "react";
import AddTut from "./AddTut";
import TutCard from "./TutCard";
import { IoMdAdd } from "react-icons/io";

export default function Body() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="container">
      <AddTut toggle={toggle} modal={modal} />
      <div className="row pt-4">
        <TutCard />
        <TutCard />

        <TutCard />
      </div>
      <button
        className="btn float-btn btn-primary rounded-0 d-flex align-items-center"
        onClick={toggle}
      >
        <IoMdAdd className="display-7" />
      </button>
    </div>
  );
}
