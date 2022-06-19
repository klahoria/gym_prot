import React from "react";

export default function BannerSquats() {
  return (
    <div
      className="row pr justify-content-center align-items-center"
      style={{ height: "540px", overflow: "hidden" }}
    >
      <img
        src="/img/svg/ripple_mirror.svg"
        alt=""
        style={{
          position: "absolute",
          left: "0",
          zIndex: "0",
          top: "-150px",
        }}
      />
      <img
        src="/img/png/banner_squats.png"
        className="w-100 px-0"
        alt=""
        style={{ position: "absolute", right: "0", zIndex: "-1" }}
      />
      <div className="col-12 text-center log_mainImage content">
        SWEAT. GAIN. DO.
      </div>
    </div>
  );
}
