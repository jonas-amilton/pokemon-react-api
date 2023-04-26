import React from 'react';
import ContentPage from '../components/ContentPage';
import { Grid, Paper, Typography } from '@mui/material';
import colorType, { TColorType } from '../utils/colorType';
import PokemonType from '../types/PokemonType';

const Detail: React.FC = () => {
  const pokemon = {
    image: '/images/001.png',
    type: 'fire',
    name: 'Charizard 1',
    cod: '#006',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt, nulla eum autem quibusdam fugit enim, illo quidem tempore veritatis, doloribus ipsam sed saepe ratione quisquam harum ullam molestiaenisi.',
    alternativeName: 'Mega Charizard x',
    forms: [
      {
        image: '/images/001.png',
        type: 'fire'
      },
      {
        image: '/images/001.png',
        type: 'grass'
      },
      {
        image: '/images/001.png',
        type: 'water'
      }
    ]
  };

  return (
    <ContentPage>
      <Grid container height="70vh" spacing={4}>
        {/* Left */}
        <Grid item container xs={12} md={6} height="min-content" alignSelf="center">
          <Grid item container height="min-content">
            <Grid item xs={12}>
              <Typography variant="body1">{pokemon.cod}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" fontWeight={700}>
                {pokemon.name}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-end" gap="8px">
              <Typography
                variant="body2"
                sx={{
                  color: '#FFF',
                  backgroundColor: '#F28557',
                  borderRadius: '4px',
                  padding: '4px 16px',
                  height: 'min-content'
                }}
              >
                Fire
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#FFF',
                  background: 'linear-gradient(to top, gray 50%, #95bbe4 0)',
                  borderRadius: '4px',
                  padding: '4px 16px',
                  height: 'min-content'
                }}
              >
                Flying
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                backgroundColor: '#95bbe4',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={pokemon.image} alt="" />
            </Paper>
          </Grid>
        </Grid>

        {/* Right */}
        <Grid item container xs={12} md={6} alignContent="center" gap="16px">
          <Grid item xs={12} display="flex" justifyContent="space-around">
            <Typography variant="body1" fontWeight={700}>
              Form
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              Detail
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              Types
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              Stats
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              Wear
            </Typography>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
            {pokemon.forms.map(item => (
              <Paper
                key={item.type}
                sx={{
                  backgroundColor: colorType[item.type as TColorType].card
                }}
              >
                <img src={item.image} height="90px" alt="" />
              </Paper>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">{pokemon.alternativeName}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{pokemon.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </ContentPage>
  );
};

export default Detail;
