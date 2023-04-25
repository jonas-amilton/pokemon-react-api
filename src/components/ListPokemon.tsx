import React from 'react';
import PokemonType from '../types/PokemonType';
import { Grid } from '@mui/material';
import CardPokemon from './CardPokemon';

interface ListPokemonProps {
  items: PokemonType[];
}

const ListPokemon: React.FC<ListPokemonProps> = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.cod}>
          <CardPokemon pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPokemon;
