const LobbyGenre = (props) => {
    return (
        <ul className="meta__genres hide-scrollbar">
            <li className="genre">
                <p>{ props.genre }</p>
            </li>
        </ul>
    );
}

export default LobbyGenre;