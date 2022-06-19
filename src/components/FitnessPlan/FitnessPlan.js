import React from "react";
import Button from "../Button/Button";
import { CardImageBottom } from "../cards/CardContentIn";

export default function FitnessPlan() {
  return (
    <div className="tab_changes_3 p-150 row">
      <div className="row px-5">
        <div className="col-md-8 col-12">
          <h1 className="h1 px-md-5 px-0 jumbotron">
            Free home workouts and fitness plans
          </h1>
        </div>
        <div className="col-md-5 col-12 px-3">
          <p className="h5 fw-normal ps-5 pe-3 py-4 l-h-40">
            With free online classes people who don’t have the time or money to
            afford a personal coach can make change their lives forever.
          </p>
        </div>

        <div className="col-12 px-5">
          <span className="px-3">
            {/* <button>View All</button> */}
            <Button>View All</Button>
          </span>
        </div>
      </div>

      <div className="row justify-content-center my-5 pt-5">
        <div className="col-11">
          <div className="row mt-5 pt-5 justify-content-evenly">
            {/* card 1 */}
            <CardImageBottom
              image="/img/jpeg/girl_jungle.jpeg"
              action="View"
              title_text="30 MINUTES"
              price="Free"
              excersise_type={"The Perfect Outdoor Workout"}
            />
            {/* card 2 */}
            <CardImageBottom
              image="/img/jpeg/boy_gym.jpeg"
              action="View"
              title_text="30 DAYS"
              price="Free"
              excersise_type={"Back Day"}
            />
            {/* card 3 */}
            <CardImageBottom
              image="/img/jpeg/girl_gym.jpeg"
              action="View"
              title_text="40 Minutes"
              price="Free"
              excersise_type={"The Ultimate Abs Tabata"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
