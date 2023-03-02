import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./index.css";
import Scroll from "../Components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // creating the state
      robots: [],
      searchBox: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }));
  }

  // function for updating state on search bar input
  onSearchChange = (event) => {
    this.setState({ searchBox: event.target.value });
  };
  // render function for rendering the final page
  render() {
    const { robots, searchBox } = this.state;
    // search bar logic for state change to robot array
    // filters robots that include search input
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    if (!robots.length) {
      <h1>loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
