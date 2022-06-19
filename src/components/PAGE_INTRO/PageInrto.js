import React from "react";
import Button from "../Button/Button";

export default function PageInrto() {
  return (
    <div className="row align-items-center justify-content-around p-150">
      <div className="col-md-6 px-5 px-md-0 col-12 text-center">
        <div>
          <h2 className="log_mainImage h1 text-center">Sandra Lyons</h2>
          <div className="logo_main_image text-center">
            <img
              src="/img/piicking_weight_Rectangle 439.png"
              className="br-10 h-100 "
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-5 col-12">
        <div className="row t_0">
          <div className="col-12 t_1">
            <p>HI I'M SANDRA LYONS</p>
          </div>
          <div className="col-12">
            <h2 className="t_2">
              Your go to online fitness trainer and nutritionist.
            </h2>
          </div>
          <div className="t_3 h5 " style={{ lineHeight: "1.8rem" }}>
            <p>
              After getting a bachelors in nutrition and fitness training I
              started working with people all around and changing their lives
              forever.
            </p>
          </div>
            <Button>Online Coaching</Button>
        </div>
      </div>

      {/* Bottome Col tilted */}
    </div>
  );
}
