import Lobby from './Lobby';
import GetGenres from '../Hooks/GetGenres';

const Lobbies = (props) => {
    const lobbies = [{ name: 'Lobby 1', people: 5, genres: [1, 2, 3] }, { name: 'Lobby 1', people: 5, genres: [1, 2, 3] }, { name: 'Lobby 1', people: 5, genres: [1, 2, 3] }, { name: 'Lobby 1', people: 5, genres: [1, 2, 3]}, { name: 'Lobby 1', people: 5, genres: [1, 2, 3] }];
    const lobbyList = lobbies.map((lobby) =>  
        <Lobby name={ lobby.name } people={ lobby.people } genres={ lobby.genres } />
    );

    return <ul className="lobbies__list">{ lobbyList }</ul>;
}

export default Lobbies;