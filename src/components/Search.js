import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';

function Search({updatePokeData, pokeList}) {
    const [searchedVal, setSearchedVal] = useState();

    const addVal = (e) => {
        setSearchedVal(e.target.value)
        console.log('pokelist', pokeList)
    }
    
    const searchPokemon = () => {

        let newArray = []
        pokeList.forEach(poke => {
            if (poke.name.includes(searchedVal)) {
                newArray.push(poke);
            }
        });
        console.log(newArray)
        updatePokeData(newArray);
    }

    return(
        <div>
      <TextField 
      id="filled-basic" 
        label="Filled" 
        variant="filled"
        value={searchedVal}
        onChange={(e) => addVal(e)} />
        <Button onClick={searchPokemon}>Search</Button>

        </div>
    );
}

export default Search;