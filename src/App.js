
import './App.css';
import { useEffect, useState } from 'react';
import Card from './views/Pokemon/components/Card';

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  useEffect(() => {
    const consumeApi = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=200").then(result => result.json()).then(data => {
        data.results.forEach(value => {
          fetch(value.url).then(result2 => result2.json()).then(data2 => {
            setListPokemon(prev => [...prev.sort((a,b) => a.id - b.id), {
              id: data2.id,
              name: data2.name,
              img: data2.sprites.front_default,
              type: data2.types[0].type.name
            }]);
          });
        });
      })
    }
    consumeApi();
  }, []);
  return (
    <div className="App">
      <h1 className='title'>PokeDex</h1>
      <div className="cards">
        {listPokemon?.map(val => (<Card key={val.id} data={val}/>))}
      </div>
      
    </div>
  );
  
}

export default App;
