import React, {createContext, useEffect, useState} from "react";
import items from "./data";
import {useStateWithCallbackLazy} from "use-state-with-callback";

const RoomsContext = createContext();

function RoomsProvider({children}) {
    let [state, setState] = useStateWithCallbackLazy({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        search: {
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            size: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: 0,
            pets: false
        }
    });

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice = Math.max(...rooms.map(r => r.price));
        let maxSize = Math.max(...rooms.map(r => r.size));


        const newState = {
            sortedRooms: rooms,
            rooms: rooms,
            featuredRooms: featuredRooms,
            loading: false,
            search: {
                price: maxPrice,
                maxPrice,
                maxSize
            }
        };

        setState(() => newState);
    }, []);

    const formatData = (items) => {
        return items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((img) => img.fields.file.url);

            return {id, ...item.fields, images};
        });
    };


    const getRoom = (slug) => {
        let tempRooms = [...state.rooms];
        return tempRooms.find((room) => room.slug === slug);
    };

    const handleChange = (evt) => {
        const target = evt.target;
        const value = evt.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        }, filterRooms)

        console.log(state.search)

    }

    const filterRooms = () => {
        console.log("filterRooms");
    }

    // const sortedRooms = () => {
    //     console.log("sortedRooms");
    // };


    return (
        <RoomsContext.Provider value={{...state, getRoom, handleChange}}>
            {children}
        </RoomsContext.Provider>
    );
}

export {RoomsContext, RoomsProvider};
