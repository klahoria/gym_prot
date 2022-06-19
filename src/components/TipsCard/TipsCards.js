import React from "react";
import CardContentIn from "../cards/CardContentIn";

export default function TipsCards() {
  return (
    <div className="row justify-content-center my-5 pt-5">
      <div className="col-11">
        <div className="row mt-5 pt-5 justify-content-evenly">
          {/* Card 1 */}
          <CardContentIn image="/img/jpeg/dips.jpeg" alt="diet image" />
          {/* card 2 */}
          <CardContentIn image="/img/jpeg/egg_diet.jpeg" alt="diet image" />
          {/* card 3 */}
          <CardContentIn image="/img/jpeg/girl_jungle.jpeg" alt="diet image" />
        </div>
      </div>
    </div>
  );
}
