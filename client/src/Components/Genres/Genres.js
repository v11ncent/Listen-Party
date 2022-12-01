import { useState, useEffect } from 'react';
import FetchGenres from './Functions/FetchGenres';
import Genre from './Genre';

const Genres = () => {
    const [genres, setGenres] = useState([]);
    let genreList = [];

    useEffect(() => {
        FetchGenres(10).then((res) => {
            setGenres(res);
        });
    }, []);

    genreList = genres.map((genre) =>
        <Genre key = { genre.genre_id } name = { genre.genre_name } />
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