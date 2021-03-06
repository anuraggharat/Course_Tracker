import React, { useState, useEffect } from "react";
import AddTut from "./AddTut";
import TutCard from "./TutCard";
import { IoMdAdd } from "react-icons/io";

export default function Body() {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/courses");
      const courses = await res.json();
      console.log(courses);
      setCourses(courses);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);
  return (
    <div className="container">
      <AddTut toggle={toggle} modal={modal} />
      <div className="row pt-4">
        {!loading && courses.map((item) => <TutCard item={item} />)}
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
