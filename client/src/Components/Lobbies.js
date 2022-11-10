import Lobby from './Lobby';
import GetGenres from '../Functions/GetGenres';

const Lobbies = (props) => {
    const lobbies = [{ name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }, { name: 'Lobby 1', people: 5, genres: ['Electronic', 'DnB'] }];
    const lobbyList = lobbies.map((lobby) =>  
        <Lobby name={ lobby.name } people={ lobby.people } genres={ lobby.genres } />
    );

    return <ul className="lobbies__list">{ lobbyList }</ul>;
}

export default Lobbies;