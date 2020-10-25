import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1>Wine Search</h1><span><FontAwesomeIcon href="" icon={faWineGlassAlt} size="2x"/></span>
    </div>
  );
}

export default App;
