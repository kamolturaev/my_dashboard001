import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#0e3238',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Card1() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8,}}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        {/* <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid> */}
      </Grid>
    </Box>
    
  );
}