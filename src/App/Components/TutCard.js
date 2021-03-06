import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { AiOutlineFire } from "react-icons/ai";

export default function TutCard({ item }) {
  return (
    <div className="col-lg-4 col-sm-12 my-3">
      <Card className="border-0 shadow  ">
        <CardBody>
          <a href={item.link} target="_blank" className="link" rel="noreferrer">
            <CardTitle tag="h4">{item.name}</CardTitle>
          </a>
          <CardSubtitle tag="p" className="my-2 text-muted">
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
                  <AiOutlineFire className="mt-1 text-danger" />
                </div>
              </div>
              <div className="col-lg-6 ">
                <p className="my-0 font-weight-bold">STATUS:</p>
                <div className="d-flex align-item-center">
                  <p className="my-auto mr-5 text-muted">{item.status}</p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
