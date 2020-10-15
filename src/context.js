import React, { createContext, useState, useEffect } from "react";
import items from "./data";

const RoomsContext = createContext();

function RoomsProvider({ children }) {
  let [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    const newState = {
      sortedRooms: rooms,
      rooms: rooms,
      featuredRooms: featuredRooms,
      loading: false,
    };

    setState((s) => newState);
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);

      let room = { id, ...item.fields, images };
      return room;
    });

    return tempItems;
  };

  // const sortedRooms = () => {};

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);

    return room;
  };

  return (
    <RoomsContext.Provider value={{ ...state, getRoom }}>
      {children}
    </RoomsContext.Provider>
  );
}

export { RoomsContext, RoomsProvider };
