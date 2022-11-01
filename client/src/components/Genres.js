import RandomColor from '../Hooks/RandomColor';

const Genres = (props) => {
    const genres = props.genres;
    const genreList = genres.map((genre) => 
        <li className="genre" style={{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ genre }</p>
        </li>
    );

    return <ul className="genres hide-scrollbar">{ genreList }</ul>;
}

export default Genres;