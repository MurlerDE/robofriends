import React from "react";
import Card from './Card'


const CardList = ({ robots }) => {
    return (
        <>
            <section className='gap-2 grid grid-cols-6 mx-auto w-full max-w-[80%]'>
                {
                    robots.map((user, i) => {
                        return (
                            <Card
                                key={robots[i].id}
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                            />)
                    })
                }
            </section>
        </>
    );
}

export default CardList