import { Link } from 'react-router-dom';
import lobbyBackgroundImage from '../../media/lobby-background.jpg';

const Lobby = (props) => {
    const id = props.id;
    const name = props.name;
    const people = props.people || 0;
    const genre = props.genre;
    
    return (
        <li className = "lobby">
            <Link to = {`/lobby/${id}`}>
                <img src={ lobbyBackgroundImage } className="lobby__image"/>
                <section className="lobby__meta">
                    <h2 className="meta__name">{ name }</h2>
                    <p className="meta__people">{ `${people} listeners` }</p>
                    <ul className="meta__genres hide-scrollbar">
                        <li className="genre">
                            <p>{ genre }</p>
                        </li>
                    </ul>
                </section>
            </Link>
        </li>
    );
}

export default Lobby;

 // const genreList = genres.map((genre) => 
    //     <li className="genre" key={ genre[0] }>
    //         <p>{ genre[1] }</p>
    //     </li>
    // );