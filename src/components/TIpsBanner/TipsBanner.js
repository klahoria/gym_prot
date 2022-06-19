import React from "react";
import Button from "../Button/Button";

export default function TipsBanner() {
  return (
    <div className="row p-150 justify-content-center">
      <div className="col-12 fs-64 text-center fw-700">
        Read our tips and tricks
      </div>
      <div className="h5 fw-normal text-center col-6 l-h-40">
        We post a lot of free content around health fitness and general
        wellbeing. Make sure to check all of our posts down below.
      </div>
      <div className="col-12 text-center">
        <Button>VIEW ALL POSTS</Button>
      </div>
    </div>
  );
}
