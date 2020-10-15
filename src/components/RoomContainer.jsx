import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";
import { useContext } from "react";
import { RoomsContext } from "../context";

const RoomsContainer = () => {
  const { rooms, sortedRooms, loading } = useContext(RoomsContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
