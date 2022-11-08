import { useState, useEffect } from 'react';
import GetGenres from '../Functions/GetGenres';
import RandomColor from '../Functions/RandomColor';

const Genres = () => {
    const [genres, setGenres] = useState([[1, 'Ambient'], [2, 'Breakcore'], [3, 'DnB']]);
    let genreList = [];

    useEffect(() => {
        const fetchGenres = async (numberOfGenres) => {
            try {
                // Fix this later
                setGenres(await GetGenres(randomNumber(numberOfGenres)));
            }
            catch(error) {
                console.error(error.toJSON());
            }
        }

        const randomNumber = (maxNumber) => {
            return Math.floor(Math.random() * (maxNumber - 5) + 5);
        }
        
        try {
            fetchGenres(10);
            // setInterval(() => fetchGenres(10), 5000);
        }
        catch (error) {
            console.log('There was an error');
        }
    }, []);

    if (genres) {
        genreList = genres.map((genre) => 
            <li className="genre" key={ genre[0] } style={{ backgroundColor: RandomColor('red', 0.75) }}>
                <p>{ genre[1] }</p>
            </li>
        );
    }

    return (
        <div>
            <ul className="genres__list hide-scrollbar">{ genreList }</ul>
        </div>
    );
}

export default Genres;