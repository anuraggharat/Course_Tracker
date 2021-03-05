import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { AiOutlineFire } from "react-icons/ai";

export default function TutCard() {
  return (
    <div className="col-lg-4 col-sm-12 my-3">
      <Card className="border-0 shadow  ">
        <CardBody>
          <CardTitle tag="h4">React Crash Course</CardTitle>
          <CardSubtitle tag="h6" className="my-2 text-muted">
            Web Development
          </CardSubtitle>
          <CardText>
            A quick introduction course with 2 hours of content.
          </CardText>
          <div className="d-flex flex-column ">
            <div className="row">
              <h6 className="my-0 ">TAGS:</h6>
              <p className="text-muted">React,Frontend,WebDev</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h6 className="my-0">PRIORITY:</h6>
                <div className="d-flex align-item-center">
                  <p className="my-auto mr-5 text-muted">High Priority</p>
                  <AiOutlineFire className="mt-1 text-danger" />
                </div>
              </div>
              <div className="col-lg-6">
                <h6 className="my-0">STATUS:</h6>
                <div className="d-flex align-item-center">
                  <p className="my-auto mr-5 text-muted">Started</p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
