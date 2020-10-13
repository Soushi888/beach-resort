import React, {useContext} from "react";
import {RoomsContext} from "../context";
import Title from "./Title";

// Get unique values
function getUnique(items, value) {
    return [...new Set(items.map(i => i[value]))]
}

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomsContext);
    const {handleChange} = context;
    // console.log(context)
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        size,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context.search;

    // Get unique types
    let types = getUnique(rooms, 'type');
    types = ["all", ...types];
    types = types.map((type, index) => <option value={type} key={index}>{type}</option>);

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form action="" className="filter-form">
                {/* Select Type */}
                <div className="form-group"><label htmlFor="type">
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </label></div>
                {/* End Select Type */}
            </form>
        </section>
    );
}


export default RoomsFilter;
