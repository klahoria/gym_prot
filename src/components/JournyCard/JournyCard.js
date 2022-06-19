import React from "react";
import Button from "../Button/Button";

export default function JournyCard() {
  return (
    <div className="row justify-content-center" style={{ marginTop: "150px" }}>
      <div className="col-5 text-center h1 fw-bold">
        The journey to a healthier body starts right now
      </div>
      <div className="col-12 text-center mt-5">
        {/* <button>Online Coaching</button> */}
        <Button>Online Coaching</Button>
      </div>
    </div>
  );
}
