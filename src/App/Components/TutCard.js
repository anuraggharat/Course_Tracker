import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { AiOutlineFire } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function TutCard({ item, loadCourses }) {
  const deleteCourse = async () => {
    console.log(item.id);
    try {
      await fetch("/api/courses", {
        method: "DELETE",
        body: JSON.stringify({ id: item.id }),
      });
      loadCourses();
      toast.success("Courses Deleted", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
      });
    } catch (err) {
      console.error(err);
      toast.error("Courses not deleted", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnFocusLoss: false,
      });
    }
  };

  return (
    <div className="col-lg-6 col-sm-12 my-3">
      <Card className="border-0 shadow  ">
        <CardBody>
          <CardTitle
            tag="h4"
            className="justify-content-between w-100 d-flex align-items-center"
          >
            <a
              href={item.link}
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              {item.name}
            </a>
            <small className="d-flex">
              <div className="">
                <FaTrashAlt
                  className="small text-danger"
                  onClick={() => deleteCourse()}
                />
              </div>
            </small>
          </CardTitle>
          <CardSubtitle tag="p" className="my-2 text-muted ">
            {item.type}
          </CardSubtitle>
          <CardText>{item.note}</CardText>
          <div className="d-flex flex-column ">
            <div className="row">
              <h6 className="my-0 ">TAGS:</h6>
              <div className="d-flex mb-2 pt-2">
                {item.tags.map((tag) => (
                  <p className="pills" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h6 className="my-0">PRIORITY:</h6>
                <div className="d-flex align-item-center">
                  <p className="my-auto mr-5 text-muted">{item.priority}</p>
                  {item.priority === "High" && (
                    <AiOutlineFire className="mt-1 text-danger" />
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <p className="my-0 font-weight-bold">STATUS:</p>
                <div className="d-flex align-item-center">
                  <p className="my-auto mr-5 text-muted">{item.status}</p>
                </div>
              </div>
              {/* <div className="col-lg-4">
                <p className="my-0 font-weight-bold">ACTIONS:</p>
                <div className="d-flex align-item-center p-0 ">
                  <BiTrash className="small text-danger " />
                  <BiPen className="small text-dark " />
                </div>
              </div> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
