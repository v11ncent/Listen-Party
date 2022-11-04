import Lobby from './Lobby';

const Lobbies = () => {
    const lobbies = [{ name: 'Lobby 1', people: 5 }, { name: 'Lobby 2', people: 3 }, { name: 'Lobby 3' }, { name: 'Lobby 4' }, { name: 'Lobby 5' }, { name: 'Lobby 6' }, { name: 'Lobby 7' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }];
    const lobbyList = lobbies.map((lobby) =>  
        <Lobby name={ lobby.name } people={ lobby.people } />
    );

    return <ul className="lobbies">{ lobbyList }</ul>;
}

export default Lobbies;