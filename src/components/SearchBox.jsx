import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <>
            <input type="search"
                placeholder="search robots"
                className="bg-blue-200 rounded w-80 h-11 text-center [border:_1px_solid_grey]"
                onChange={searchChange} />

        </>
    );
}

export default SearchBox;