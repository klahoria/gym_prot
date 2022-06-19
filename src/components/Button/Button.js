import React, { useEffect } from "react";
import "./Button.css";

export default function Button(props) {
  useEffect(() => {
    console.log(props.type);
    return () => {};
  }, []);

  return (
    <button className="f-f-sato w-100 text-center py-3 change_hover btn border-0 button_v1">
      <span className="fw-bold d-flex justify-content-center">
        <span className="arrow_change">
          <img src="img/svg/arrow.svg" alt="" />
        </span>
        <span className="propsName pe-4"> {props.children}</span>
      </span>
    </button>
  );
}
