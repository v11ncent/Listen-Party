import Lobby from './Lobby';
import RandomColor from '../Hooks/RandomColor';

const Lobbies = (props) => {
    const lobbies = props.lobbies;
    const lobbyList = lobbies.map((lobby) =>  
        <Lobby name={ lobby.name } people={ lobby.people } />
    );

    return <ul className="lobbies">{ lobbyList }</ul>;
}

export default Lobbies;