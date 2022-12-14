import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Signup from './Signup'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Page5() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}
      alignItems="stretch"
      sx={{
        '.MuiPaper-root': {
            height: '100%',
            padding: '15px 30px',
        }
    }}>
          
        <Grid item xs={8}>
        <Item>
           <Signup/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
