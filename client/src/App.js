import './stylesheets/css/main.css';
import Genres from './components/Genres';

function App() {
  return (
    <div className="main">
      <aside className="genres">
        <Genres genres={ ['Ambient', 'Dungeon', 'Isolationism', 'Dreampunk', 'Breakcore', 'Future bass', 'UK bass', 'Wave', 'Acid breaks', 'Electro-disco', 'Eurodisco', 'Eurobeat', 'Spacesynth', 'Post-disco', 'Drumstep', 'Hardstep'] } />
      </aside>
    </div>
  );
}

export default App;
