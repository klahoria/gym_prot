import React from 'react'

export function CardContentBottom(props) {
    return (
      <div className="col-md-4 col-12 my-md-0 my-3 m-474">
        <div className="card border-0 br-10 h-100">
          <img
            className="h-400 of-cover"
            src={props?.image}
            alt=""
          />
          <div className="w-100 px-4 py-2">
            <div className="d-flex justify-content-between pt-4 pb-2">
              <div className="title_1 f-r-h">{props?.title_text}</div>
              <div className="title_2 f-r-h">{props?.price}</div>
            </div>
            <div className="w-100 h4 f-f-sato py-2 fw-bold">{props?.excersise_type}</div>
            <div className="w-100">
              <p>&gt; {props?.action || "View"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  