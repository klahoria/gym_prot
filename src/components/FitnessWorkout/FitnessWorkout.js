import React from "react";
import Button from "../Button/Button";
import { CardImageBottom } from "../cards/CardContentIn";

export default function FitnessWorkout() {
  return (
    <div className="tab_cahnges_3 p-150 banner_1 bg_svg row">
      <div className="row justify-content-center">
        <div className="col-md-11 px-4">
          <div className="col-md-8 col-12 content">
            <h1 className="jumbotron content">
              Free home workouts and fitness plans
            </h1>
            <div className="col-md-8 col-12 content h5 fw-normal l-h-40 py-3 px-2">
              I’ve created these premium fitness classes for everyone starting
              from beginner to advanced level with an in depth FAQ.
            </div>
            <div className="px-2">
              {/* <button>&gt; View ALL</button> */}
              <Button type="white">View All</Button>
            </div>
          </div>
        </div>
        <div className="col-md-11 col-12">
          <div className="row mt-5 pt-5 justify-content-evenly">
            {/* card 1 */}
            <CardImageBottom
              image="/img/jpeg/girl_gym_elastic.png"
              action="View"
              title_text="3 DAYS A WEEK"
              price="$19.99 USD"
              excersise_type={"Home Burn"}
            />
            {/* card 2 */}
            <CardImageBottom
              image="/img/jpeg/shead_meal_plan.jpeg"
              action="View"
              title_text="30 DAYS"
              price="$29.99 USD"
              excersise_type={"Shedded Meal Plan"}
            />
            {/* card 3 */}
            <CardImageBottom
              image="/img/jpeg/hign_intensity_training.jpeg"
              action="Train Now"
              title_text="7 DAYS A WEEK"
              price="Free"
              excersise_type={"Hign Intensity Training"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
