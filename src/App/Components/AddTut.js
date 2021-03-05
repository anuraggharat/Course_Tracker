import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Chips, { Chip } from "react-chips";

export default function AddTut(props) {
  const [chips, setChips] = useState([]);

  const onChange = (chips) => {
    setChips(chips);
  };
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} fullscreen={true}>
        <ModalHeader>Add a new Tutorial</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control my-2"
                id="name"
                placeholder="Tutorial Name"
              />
              <textarea
                className="form-control  my-2"
                id="note"
                rows="3"
                placeholder="Note"
              ></textarea>
              <select id="category" className="form-control my-2">
                <option selected>Set Status</option>
                <option>To Start</option>
                <option>Not set</option>
                <option>Ongoing</option>
                <option>Done</option>
              </select>
              <div className="form-group">
                <select id="status" className="form-control my-2">
                  <option selected>Priority</option>
                  <option>High</option>
                  <option>Moderate</option>
                  <option>Low</option>
                  <option>Not set</option>
                </select>
              </div>
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
