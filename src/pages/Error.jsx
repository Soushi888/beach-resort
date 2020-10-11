import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="3rr0r 404..." subtitle="...P4g3 n07 f0und3d...">
        <Link to="/" className="btn-primary">
          Go back Home
        </Link>
      </Banner>
    </Hero>
  );
}
