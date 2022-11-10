import { useState, useEffect } from 'react';
import GetGenres from '../Functions/GetGenres';
import RandomColor from '../Functions/RandomColor';

const Genres = () => {
    const [genres, setGenres] = useState([]);
    let genresList = [];

    useEffect(() => {
        const fetchGenres = async (numberOfGenres) => {
            setGenres(await GetGenres(numberOfGenres));
        }

        fetchGenres(10);
    }, []);


    genresList = genres.map((genre) =>
        <li className="genre" key={ genre.genre_id } style={{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ genre.genre_name }</p>
        </li>
    );

    return (
        <ul className="genres__list hide-scrollbar">{ genresList }</ul>
    );
}

export default Genres;

// setInterval(() => fetchGenres(10), 5000);
// const randomNumber = (maxNumber) => {
//     return Math.floor(Math.random() * (maxNumber - 5) + 5);
// }