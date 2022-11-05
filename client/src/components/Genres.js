import { useState, useEffect } from 'react';
import GetGenres from '../Hooks/GetGenres';
import RandomColor from '../Hooks/RandomColor';

const Genres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => setGenres(await GetGenres(10));
        fetchGenres();
    }, []);

    console.log(genres.length)

    const genreList = genres.map((genre) => 
        <li className="genre" style={{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ genre }</p>
        </li>
    );

    return <ul className="genres__list hide-scrollbar">{ genreList }</ul>;
}

export default Genres;