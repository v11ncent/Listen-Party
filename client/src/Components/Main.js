import { useState } from 'react';
import Genres from '../Components/Genres/Genres';
import Lobbies from '../Components/Lobbies/Lobbies';
import Workshop from '../Components/Workshop/Workshop';

const Main = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    console.log(formSubmitted)
    
    return (
        <div className="main">
            <header className="navigation">
                <h2>Listen Party</h2>
            </header>
            <aside className="genres">
                <Genres />
            </aside>
            <main className="lobbies">
                <Lobbies />
            </main>
            <section className="workshop">
                <Workshop setFormSubmitted = { setFormSubmitted } formSubmitted = { formSubmitted } />
            </section>
        </div>
    );
}

export default Main;