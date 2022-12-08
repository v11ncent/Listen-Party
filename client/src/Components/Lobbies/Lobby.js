import { Link } from "react-router-dom";
import LobbyName from "./LobbyName";
import LobbyListeners from "./LobbyListeners";
import LobbyGenre from "./LobbyGenre";
import lobbyBackgroundImage from "../../media/lobby-background.jpg";

const Lobby = (props) => {
  return (
    <li className="lobby">
      <Link to={`/lobby/${props.id}`}>
        <img src={lobbyBackgroundImage} className="lobby__image" />
        <section className="lobby__meta">
          <LobbyName name={props.name} />
          <LobbyListeners listeners={props.listeners} />
          <LobbyGenre genre={props.genre} />
        </section>
      </Link>
    </li>
  );
};

export default Lobby;
