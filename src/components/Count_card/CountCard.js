import React from "react";

export default function CountCard() {
  return (
    <div
      className="row align-items-center banner_1 py-5 h-100 p-150"
      style={{ position: "relative", marginTop: "130px" }}
    >
      <div className="col-md-4 col-12">
        <div className="content text-center w-100 fw-bolder h2">1900+</div>
        <div className="content text-center w-100">HAPPY CLIENTS</div>
      </div>
      <div className="col-md-4 col-12">
        <div className="content text-center w-100 fw-bolder h2">5 yrs</div>
        <div className="content text-center w-100">OF EXPERIENCE</div>
      </div>
      <div className="col-md-4 col-12">
        <div className="content text-center w-100 fw-bolder h2">156K</div>
        <div className="content text-center w-100">FOLLOWING ME</div>
      </div>
      <div className="bannertop w-100"></div>
      <div className="bannerbottom w-100"></div>
    </div>
  );
}
