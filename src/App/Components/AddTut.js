import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Chips from "react-chips";

export default function AddTut(props) {
  const [chips, setChips] = useState([]);

  const [values, setValues] = useState({
    name: "",
    link: "",
    note: "",
    status: "",
    priority: "",
  });

  console.log(values);
  console.log(chips);
  const onChange = (chips) => {
    setChips(chips);
  };

  const onTextChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {};
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader>Add a new Tutorial</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control my-2"
                id="name"
                placeholder="Tutorial Name"
                name="name"
                value={values.name}
                onChange={(e) => onTextChange(e)}
              />
              <input
                type="text"
                className="form-control my-2"
                id="link"
                placeholder="Tutorial Link"
                value={values.link}
                name="link"
                onChange={(e) => onTextChange(e)}
              />
              <textarea
                className="form-control  my-2"
                id="note"
                rows="3"
                placeholder="Note"
                name="note"
                value={values.note}
                onChange={(e) => onTextChange(e)}
              ></textarea>
              <select
                id="category"
                className="form-control my-2"
                name="status"
                defaultValue={values.status}
                onChange={(e) => onTextChange(e)}
              >
                <option value={values.status}>Set Status</option>
                <option value="To Start">To Start</option>
                <option value="Not Set">Not set</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Done">Done</option>
              </select>
              <select
                id="status"
                className="form-control my-2"
                name="priority"
                defaultValue={values.priority}
                onChange={(e) => onTextChange(e)}
              >
                <option defaultValue={values.priority}>Priority</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
                <option value="Not set">Not set</option>
              </select>
              <Chips
                value={chips}
                onChange={onChange}
                placeholder="Add relevent tags!"
                className="form-control"
                suggestions={[
                  "React",
                  "Vue",
                  "Angular",
                  "Node",
                  "Express",
                  "MongoDb",
                ]}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
