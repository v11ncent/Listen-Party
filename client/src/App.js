import './stylesheets/css/main.css';
import Genres from './Components/Genres';
import Lobbies from './Components/Lobbies';
import Workshop from './Components/Workshop';

function App() {
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
        <Workshop />
      </section>
    </div>
  );
}

export default App;
