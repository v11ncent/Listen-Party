import './stylesheets/css/main.css';
import Genres from './components/Genres';
import Lobbies from './components/Lobbies';

function App() {
  return (
    <div className="main">
      <header className="navigation">
        <h2>Listen Party</h2>
      </header>
      <aside className="pane__left">
        <Genres genres={ ['Ambient', 'Dungeon', 'Isolationism', 'Dreampunk', 'Breakcore', 'Future bass', 'UK bass', 'Wave', 'Acid breaks', 'Electro-disco', 'Eurodisco', 'Eurobeat', 'Spacesynth', 'Post-disco', 'Drumstep', 'Hardstep'] } />
      </aside>
      <main className="pane__main">
        <Lobbies lobbies={ [{ name: 'Lobby 1', people: 5 }, { name: 'Lobby 2', people: 3 }, { name: 'Lobby 3' }, { name: 'Lobby 4' }, { name: 'Lobby 5' }, { name: 'Lobby 6' }, { name: 'Lobby 7' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }, { name: 'Lobby 8' }] } />
      </main>
    </div>
  );
}

export default App;
