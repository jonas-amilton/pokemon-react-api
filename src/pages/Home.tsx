import React from 'react';
import { Button, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ContentPage from '../components/ContentPage';
import CardPokemon from '../components/CardPokemon';
import PokemonType from '../types/PokemonType';
import ListPokemon from '../components/ListPokemon';

const data: PokemonType[] = [
  {
    cod: '#001',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'fire'
  },
  {
    cod: '#002',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'grass'
  },
  {
    cod: '#003',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'water'
  },
  {
    cod: '#004',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'normal'
  },
  {
    cod: '#005',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'fire'
  },
  {
    cod: '#006',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'grass'
  },
  {
    cod: '#007',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'water'
  },
  {
    cod: '#008',
    image: '/images/001.png',
    name: 'Pokemon teste',
    type: 'normal'
  }
];

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4" fontWeight="700">
          Pokédex
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography variant="body1">Pesquise seu pokemon pelo nome ou pelo código da Pokédex.</Typography>
      </Grid>
      <Grid item xs={10} md={11}>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="toggle password visibility" edge="start">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} md={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" sx={{ height: '100%' }}>
          <TuneRoundedIcon />
        </Button>
      </Grid>

      <Grid item xs={12}>
        <ContentPage>
          <ListPokemon items={data} />
        </ContentPage>
      </Grid>
    </Grid>
  );
};

export default Home;
