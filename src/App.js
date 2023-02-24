import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchBox: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchBox: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchBox.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
