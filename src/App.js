
import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
    
    <Person firstName={ 'Bob' } lastName={ 'Ross' } age={52} hairColor={'Brown'} />
    <Person firstName={ 'Vincent' } lastName={ 'Van Gogh' } age={37} hairColor={'Red'} />
    <Person firstName={ 'Pablo' } lastName={ 'Picasso' } age={91} hairColor={'White'} />
    <Person firstName={ 'Edgar' } lastName={ 'Degas' } age={83} hairColor={'Black'} />
    
    </div>
  );
}

export default App;
