import { useState, useEffect } from 'react';
import GetGenres from '../hooks/GetGenres';
import RandomColor from '../hooks/RandomColor';
import lobbyBackgroundImage from '../media/lobby-background.jpg';

const Lobby = (props) => {
    const name = props.name;
    const people = props.people || 0;
    const initialGenres = ['Breakcore', 'Ambient', 'Speedcore'];
    const [genres, setGenres] = useState(initialGenres);

    useEffect(() => {
        const fetchGenres = async () => setGenres(await GetGenres(3));
        fetchGenres();
    }, []);

    const genreList = genres.map((genre) => 
        <li className="genre" style={{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ genre }</p>
        </li>
    );

    return (
        <li className="lobby">
            <img src={ lobbyBackgroundImage } className="lobby__image"/>
            <div className="lobby__meta">
                <h2 className="meta__name">{ name }</h2>
                <p className="meta__people">{ `${people} listeners` }</p>
                <ul className="meta__genres hide-scrollbar">
                    { genreList }
                </ul>
            </div>
        </li>
    );
}

export default Lobby;