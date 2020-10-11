import React, { useContext, useState } from "react";
import { RoomsContext } from "../context";
import defaultBG from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";

export default function SingleRoom(props) {
  const [state] = useState({
    slug: props.match.params.slug,
    defaultBG,
  });

  const { getRoom } = useContext(RoomsContext);

  const room = getRoom(state.slug);
  console.log(room);

  if (!room) {
    return (
      <div className="error">
        <h3>No room finded.</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={mainImg || state.defaultBG}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price : {price}$</h6>
            <h6 className="size">Size : {size} SQFT</h6>
            <h6>
              Max capacity :{" "}
              {capacity < 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets allowed" : "Pets not allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
