import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Personal from "../Home/Personal";
import Books from "../Home/Books";
import Travel from "../Home/Travel";
import Inspiration from "../Home/Inspiration";
import Creator from "../Home/Creator";

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Devotional />
      <Travel />
      <Books />
      <Inspiration />
      <Personal/>
      <Creator />
    </div>
  );
}

export default Home;
