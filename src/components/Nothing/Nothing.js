import React from "react";
import Cardsmall from "../cards/Cardsmall";

export default function Nothing() {
  return (
    <div className="row justify-content-around flex-wrap p-150">
      {/* image one */}
      <Cardsmall
        description=" Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your dream
              physique and live a healthier life."
        title="Learn to live a healthy life with fitness"
        image="img/piicking_weight_Rectangle 439.png"
      />
      {/* image two */}
      <Cardsmall
        description="Just going to the gym and lifting weights won't make you
              healthy, after all it may even cause some harm to your body. We
              teach proper exercise techniques"
        title=" Understand how to do excercises properly"
        image="img/man_tire.jpeg"
      />
      <div className="col-12 py-5 d-md-block d-none"></div>
      {/* image three */}
      <Cardsmall
        description="We're tracking your goal weight with body fat measures, weight
              and general feeling. You may have the same body weight but feel
              10x better."
        title={
          <>
            Track your progress <br /> weekly
          </>
        }
        image="img/man_suplement.jpeg"
      />
      {/* image four */}
      <Cardsmall
        description="Everyone is different, and we know it. That's why all of our
              clients get a programme specific just for their lifestyle and
              body tipe. This give the best possible results."
        title="Follow a specific plan made just for you."
        image="img/girl_2.png"
      />
    </div>
  );
}
