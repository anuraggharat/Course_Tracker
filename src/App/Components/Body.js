import React, { useState, useEffect } from "react";
import AddTut from "./AddTut";
import TutCard from "./TutCard";
import { IoMdAdd } from "react-icons/io";
import Loader from "./Loader";
import { toast } from "react-toastify";

export default function Body() {
  const [modal, setModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggle = () => setModal(!modal);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/courses");

      const data = await res.json();
      console.log(data);

      setCourses(data);
      setLoading(false);
      toast.success("Courses Updated", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
      });
    } catch (error) {
      setLoading(false);
      toast.error("Unable to fetch Courses", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
      });
    }
  };
  console.log(courses);
  useEffect(() => {
    loadCourses();
  }, []);
  return (
    <div className="container">
      <AddTut toggle={toggle} modal={modal} loadCourses={loadCourses} />
      <div className="row pt-4">
        {!loading &&
          courses.map((item) => (
            <TutCard item={item} key={item.id} loadCourses={loadCourses} />
          ))}
        {loading && <Loader />}
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
