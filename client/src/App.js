import './stylesheets/css/main.css';
import Genres from './Components/Genres';
import Lobbies from './Components/Lobbies';

function App() {
  return (
    <div className="main">
      <header className="navigation">
        <h2>Listen Party</h2>
      </header>
      <aside className="pane__left">
        <Genres />
      </aside>
      <main className="pane__main">
        <Lobbies />
      </main>
    </div>
  );
}

export default App;
