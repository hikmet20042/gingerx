import React from "react";
import Contact from "../components/Contact";
import Discover from "../components/Discover";
import Subcription from "../components/Subcription";
import WeeklyDeals from "../components/WeeklyDeals";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <>
      {" "}
      <header>
        <Welcome />
      </header>
      <main>
        <Discover />
        <WeeklyDeals />
      </main>
      <footer>
        <Subcription />
        <Contact />
      </footer>
    </>
  );
};

export default Home;
