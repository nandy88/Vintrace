import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <h1>Wine Search <FontAwesomeIcon className="wine-icon" href="" icon={faWineGlassAlt} size="2x"/></h1>
      
      <SearchBar className="search-bar"/>
    </div>
  );
}

export default App;
