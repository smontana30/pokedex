import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CardInfo from './components/CardInfo';
import Search from './components/Search';
import {Card} from '@mui/material'

function App() {
  let limit = 100;
  let offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const [pokeData, setPokeData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [pokeList, setPokeList] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokeData(data);
        setIsLoading(true);
        console.log(data);
        setPokeList(data.results)
      })

      setIsLoading(false)
  }, [url])

  const handleOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

  return (
    <div className="App">
      <div>
        {isLoading ? (
          <div>
            <Search updatePokeData={setPokeList} pokeList={pokeList} />
            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', flexFlow: 'wrap'}}>
              {(pokeList) ? pokeList.map((pokemon, index) => (
                  <Card key={index} style={{margin: '1vh', width: '20vh'}} onClick={() => handleOpen}>
                      <CardInfo currPokeURL={pokemon.url} visible={open} toggle={handleClose}/>
                  </Card>
              )) : ''}
            </div>
          </div>
        ) : <CircularProgress /> }
      </div>
    </div>
  );
}

export default App;
