import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Chips from "react-chips";
import { toast } from "react-toastify";

export default function AddTut(props) {
  const [chips, setChips] = useState([]);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    link: "",
    note: "",
    status: "",
    priority: "",
    type: "",
  });

  const onChange = (chips) => {
    setChips(chips);
  };

  const onTextChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = { ...values, tags: chips };
    try {
      const res = await fetch("/api/courses", {
        method: "POST",
        body: JSON.stringify(body),
      });
      setValues({
        name: "",
        link: "",
        note: "",
        status: "",
        priority: "",
        type: "",
      });
      setChips([]);
      setLoading(false);
      if (res.ok) {
        toast.success("Courses added", {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnFocusLoss: false,
        });
      } else {
        toast.warning("Unable to add ", {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnFocusLoss: false,
        });
      }
      props.toggle();
    } catch (error) {
      setValues({
        name: "",
        link: "",
        note: "",
        status: "",
        priority: "",
        type: "",
      });
      setChips([]);
      setLoading(false);
    }
    props.loadCourses();
  };
  return (
    <div>
      <Modal
        isOpen={props.modal}
        toggle={props.toggle}
        modalClassName="bg-dark"
      >
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
                required
              />
              <input
                type="text"
                className="form-control my-2"
                id="link"
                placeholder="Tutorial Link"
                value={values.link}
                name="link"
                onChange={(e) => onTextChange(e)}
                required
              />
              <textarea
                className="form-control  my-2"
                id="note"
                rows="3"
                placeholder="Note"
                name="note"
                value={values.note}
                onChange={(e) => onTextChange(e)}
                required
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
                id="type"
                className="form-control my-2"
                name="type"
                defaultValue={values.type}
                onChange={(e) => onTextChange(e)}
              >
                <option value={values.status}>Select Type</option>
                <option value="Front-End Development">
                  Front-End Development
                </option>
                <option value="Back-End Development">
                  Back-End Development
                </option>
                <option value="Database Technologies">
                  Database Technologies
                </option>
                <option value="Devops">Devops</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="UI Design">UI Design</option>
                <option value="Others">Others</option>
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
                className="form-control my-2"
                suggestions={[
                  "React",
                  "Vue",
                  "Angular",
                  "JavaScript",
                  "FrontEnd",
                  "BackEnd",
                  "Database",
                  "Firebase",
                  "HTML,CSS",
                  "Blockchain",
                  "DevOps",
                  "ML",
                  "DL",
                  "Cloud Computing",
                  "C",
                  "Java",
                  "Python",
                  "Testing",
                  "UI/UX",
                  "App",
                ]}
              />
            </div>
            <div className="form-group mt-3">
              <Button
                type="submit"
                color="primary"
                onClick={(e) => onSubmit(e)}
                disabled={loading}
              >
                Add
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
