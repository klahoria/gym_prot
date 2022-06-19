import React from "react";

export default function Cardsmall(props) {
  return (
    <div className="image_box_1 col-md-4 col-12 text-center my-md-0 my-3">
      <img
        className="bb_image"
        src={props?.image}
        alt=""
      />
      <p className="col-md-8 offset-md-2 col-12 offset-0 text-center h3 py-3">
        {props?.title}
      </p>
      <p className="text-center col-md-10 col-12 offset-md-1 offset-0 d-none d-md-block h6 m-400 fw-normal">
        {props?.description}
      </p>
    </div>
  );
}
