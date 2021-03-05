import React from "react";
import TutCard from "./TutCard";

export default function Body() {
  return (
    <div className="container">
      <div className="row pt-4">
        <TutCard />
        <TutCard />

        <TutCard />
        <TutCard />
        <TutCard />
        <TutCard />
      </div>
    </div>
  );
}
