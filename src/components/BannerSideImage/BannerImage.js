import React from "react";

export default function BannerImage() {
  return (
    <div className="row p-150 justify-content-between">
      <div className="col-md-6 col-12 px-5">
        <h1 className="fs-64 px-5 col-md-11">
          Who can benefit from a fully custom online fitness plan and nutrition?
        </h1>
        <p className="col-md-10 px-5 l-h-40  py-4 h5 fw-normal">
          Literally everyone. I’m currently helping people from 12 to 60+ years
          old. Everyone is getting an adjusted program and a meal plan.
        </p>
      </div>
      <div className="col-6 text-center pr">
        <div className="my-5"></div>
        <img src="/img/girl_2.png" alt="" className="br-10 mt-5" />
        <div className="w-100 banner_1 py-4 py-5 banner_2"></div>
      </div>
    </div>
  );
}
