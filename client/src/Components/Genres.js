import { useState, useEffect } from 'react';
import FetchGenres from '../Functions/FetchGenres';
import RandomColor from '../Functions/RandomColor';

const Genres = () => {
    const [genres, setGenres] = useState([]);
    let genreList = [];

    useEffect(() => {
        FetchGenres(10).then((res) => {
            console.log(res)
            setGenres(res);
        });
    }, []);

    genreList = genres.map((genre) =>
        <li className="genre" key={ genre.genre_id } style={{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ genre.genre_name }</p>
        </li>
    );

    return (
        <ul className="genres__list hide-scrollbar">{ genreList }</ul>
    );
}

export default Genres;

// setInterval(() => fetchGenres(10), 5000);
// const randomNumber = (maxNumber) => {
//     return Math.floor(Math.random() * (maxNumber - 5) + 5);
// }