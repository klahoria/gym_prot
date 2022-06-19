import React from "react";
import "./cards.css";

function CardContentIn(props) {
  return (
    <div className="card_custom px-4 my-2" style={{ position: "relative" }}>
      <div className="card border-0 d-flex align-items-center justify-content-end br-10 h-100 mh-600 of-cover px-4">
        <img
          className="mh-600 of-cover"
          style={{
            position: "absolute",
            width: "100%",
            height: "600px !important",
            zIndex: "0",
          }}
          src={props?.image}
          alt={props?.alt || "Alternate card image text"}
        />

        <div
          className="br-10 mb-4"
          style={{
            zIndex: 10,
            color: "white !important",
            background: "white",
            width: "95%",
            height: "max-content",
          }}
        >
          <div className="w-100 row mx-0">
            <div className="col-12 py-3 px-3">
              <div className="image d-flex align-items-center">
                <img
                  src={props?.image}
                  alt=""
                  srcset=""
                  style={{ borderRadius: "50%", height: "35px", width: "35px" }}
                />{" "}
                <span className="px-3 py-2 fw-bold">CURTID VANDERVORT</span>
              </div>
              <div
                className="py-3 fw-bold h5 mb-0
              "
              >
                Healthy breakfast ideas
              </div>
              <div className="">&gt; Read more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardImageBottom(props) {
  return (
    <div className="col-md-4 col-12 my-md-0 my-3 m-474">
      <div className="card border-0 br-10 h-100">
        <img className="h-400 of-cover" src={props?.image} alt="" />
        <div className="w-100 px-4 py-2">
          <div className="d-flex justify-content-between pt-4 pb-2">
            <div className="title_1 f-r-h">{props?.title_text}</div>
            <div className="title_2 f-r-h">{props?.price}</div>
          </div>
          <div className="w-100 h4 f-f-sato py-2 fw-bold">
            {props?.excersise_type}
          </div>
          <div className="w-100">
            <p>&gt; {props?.action || "View"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardImageBottom };
export default CardContentIn;
