import React from "react";
import Button from "../Button/Button";

export default function Register() {
  return (
    <div className="row banner_3 justify-content-center p-150 px-4">
      <div className="col-11 py-5 border br-10 banner_3_bg">
        <div className="row justify-content-center px-5 py-5">
          <div className="col-12 text-center fs-64">Get our free meal plan</div>
          <div className="col-10 px-5 l-h-40 text-center h4 py-3 fw-normal">
            Signup to our newsletter to get a free 30 day meal plan. You will
            receive all guidance on what to eat, how to cook and how much to
            eat.
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <input type="text" placeholder="Full Name" className="form-control py-3" />
            </div>
            <div className="col-4">
              <input type="text" placeholder="Email" className="form-control py-3" />
            </div>
            <div className="col-4">
              {/* <button className="uppercase fw-bold w-100 mb-0 btn btn-primary">
              &gt; {"Signup".toUpperCase()}
            </button> */}

              <Button type="" className="w-100">SIGNUP</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
