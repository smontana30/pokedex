import React, {useState, useEffect} from 'react';
import { CardActions, CardContent, Button, Typography, DialogActions, DialogContent, Dialog } from '@mui/material/';

function CardInfo({currPokeURL, visible, toggle}) {
    const [currentPoke, setCurrentPoke] = useState();

    useEffect(() => {
        fetch(currPokeURL)
            .then(res => res.json())
            .then(data => {setCurrentPoke(data); console.log(data)})
    }, [currPokeURL])

    return(
        <div > 
           {currentPoke ? 
                ( <CardContent >
                    <img src={currentPoke.sprites.front_shiny} alt='oh nooo'/>
                    <Typography variant='h6' >Types</Typography>
                    {currentPoke.types.map(type => (
                        <Typography variant='subtitle1' >{type.type.name}</Typography>
                    ))}
                    <Typography variant='h5' >{currentPoke.species.name}</Typography>
                    {/* <Dialog
                        open={visible}
                        onClose={toggle}
                        
                    >
                        <Typography>{currentPoke.species.name}</Typography>

                        <DialogActions>
                            <Button onClick={toggle}>Close</Button>
                        </DialogActions>
                    </Dialog> */}
                </CardContent>) : ''}
        </div>
    );
}

export default CardInfo;