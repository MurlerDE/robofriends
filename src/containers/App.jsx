import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    };

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1>Loading !</h1> :
            (
                <>
                    <header className="justify-center items-center mb-6 h-fit text-center">
                        <h1 className="p-8 font-tentokyozoo text-black text-9xl">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    </header>
                    <main>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </main>



                </>
            )

    }
}

export default App