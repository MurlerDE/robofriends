import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import { robots } from "./robots";

const App = () => {
    return (
        <>
            <header className="justify-center items-center mb-6 h-fit text-center">
                <h1 className="p-8 text-7xl">RoboFriends</h1>
                <SearchBox />
            </header>
            <main>
                <CardList robots={robots} />
            </main>



        </>
    )
}

export default App