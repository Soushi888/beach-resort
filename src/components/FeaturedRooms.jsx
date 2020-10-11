import React, { useContext } from "react";
import { RoomsContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default function FeaturedRooms() {
  let { featuredRooms: rooms, loading } = useContext(RoomsContext);

  rooms = rooms.map((room) => <Room key={room.id} room={room} />);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
