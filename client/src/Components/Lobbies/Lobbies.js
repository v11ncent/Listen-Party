import { useState, useEffect } from "react";
import FetchLobbies from "./Functions/FetchLobbies";
import Lobby from "./Lobby";

const Lobbies = () => {
  const [lobbies, setLobbies] = useState([]);
  let lobbyArray = [];

  useEffect(() => {
    FetchLobbies(2).then((res) => {
      setLobbies(res);
    });
  }, []);

  lobbyArray = lobbies.map((lobby) => (
    <Lobby
      key={lobby.lobby_id}
      id={lobby.lobby_id}
      name={lobby.lobby_name}
      genre={lobby.lobby_genre.genre_name}
    />
  ));

  return <ul className="lobbies__list">{lobbyArray}</ul>;
};

export default Lobbies;
