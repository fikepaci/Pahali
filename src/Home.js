import React from "react";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Dee's Delight"
        />
        <Card
          src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Fountain of Life"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Garden of Eden"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="The Window"
        />
        <Card
          src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="The colour Room"
        />
        <Card
          src="https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Haven"
        />
      </div>
    </div>
  );
}

export default Home;
