import React from "react";

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-green-300 shadow-2xs hover:shadow-2xl p-3 border-2 rounded w-fit text-center hover:scale-105 transition-all duration-200 ease-in-out">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" width='200' height='200' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card