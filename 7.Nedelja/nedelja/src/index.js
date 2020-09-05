import React from 'react';
import ReactDOM from 'react-dom';
import Forma from './components/Forma';
import Card from './components/Card';


const App = () => {

  // const [input, setValue] = useState('');

  return (
    <>
      <Forma str={'Ovde klikni'} />
      <Card 
        string={'Torterra'} 
        url={'https://img.pokemondb.net/artwork/large/torterra.jpg'}
      />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
