import React, { Component } from "react";
import { connect } from "react-redux";
import { Log_In } from "./store/actions";
import "./App.css";
import PageInrto from "./components/PAGE_INTRO/PageInrto";
import CountCard from "./components/Count_card/CountCard";
import JournyCard from "./components/JournyCard/JournyCard";
import FitnessPlan from "./components/FitnessPlan/FitnessPlan";
import FitnessWorkout from "./components/FitnessWorkout/FitnessWorkout";
import BannerSquats from "./components/BannerImage/BannerSquats";
import BannerImage from "./components/BannerSideImage/BannerImage";
import Register from "./components/RegistrationForm/Register";
import TipsBanner from "./components/TIpsBanner/TipsBanner";
import TipsCards from "./components/TipsCard/TipsCards";
import Nothing from "./components/Nothing/Nothing";

export class App extends Component {
  render() {
    return (
      <>
        <main
          className="container-fluid"
          // style={{ height: window.innerHeight, width: window.innerWidth }}
        >
          <PageInrto />

          {/* Count Card */}
          <CountCard />

          {/* JOurny Card */}
          <JournyCard />
          {/* JOurny Card */}

          {/* Nothing Card */}
          <Nothing />
      
          {/* plage tab 3 */}
          <FitnessPlan />

          {/* page tab 4  */}
          <FitnessWorkout />

          {/* Banner Sweat again */}
          <BannerSquats />

          {/* Banner Image bag side */}
          <BannerImage />

          {/* Register form */}
          <Register />

          {/* Tips Banner */}
          <TipsBanner />

          {/* tips Cards */}
          <TipsCards />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispath) => {
  return {
    abc: () => dispath(Log_In({ username: "abc", password: "xyz12345" })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
