import RandomColor from '../hooks/RandomColor';
import lobbyBackgroundImage from '../media/lobby-background.jpg';

const Lobby = (props) => {
    const name = props.name;
    const people = props.people || 0;
    const genres = props.genres || null;

    return (
        <li className="lobby">
            <img src={ lobbyBackgroundImage } className="lobby__image"/>
            <div className="lobby__meta">
                <h2 className="meta__name">{ name }</h2>
                <p className="meta__people">{ `${people} listeners` }</p>
                <ul className="meta__genres hide-scrollbar">
                    <li className="genre">Ambient</li>
                    <li className="genre">Ambient</li>
                    <li className="genre">Ambient</li>
                    <li className="genre">Ambient</li>
                </ul>
            </div>
        </li>
    );
}

export default Lobby;




