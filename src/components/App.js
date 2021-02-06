import logo from '../logo.svg';
import '../App.css';
import Welcome from './Welcome'
import PlayerList from './PlayerList'
import {playerData} from '../data/playerData';

function App() {
  return (
    <div className="App">
      <Welcome />
      <PlayerList players={playerData} />
    </div>
  );
}

export default App;
