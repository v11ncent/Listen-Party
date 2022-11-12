import { useState, useEffect } from 'react';
import FetchLobbies from '../Functions/FetchLobbies';
import Lobby from './Lobby';

const Lobbies = () => {
    const [lobbies, setLobbies] = useState([]);
    let lobbyList = [];
    
    useEffect(() => {
        FetchLobbies(2).then((res) => {
            setLobbies(res);
        });
    }, []);

    lobbyList = lobbies.map((lobby) =>
        <Lobby name = { lobby.lobby_name } />
    );

    return <ul className="lobbies__list">{ lobbyList }</ul>;
}

export default Lobbies;