import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Login from "../Page2/Login";
import Pv from "../Page2/Pv";
import MainApp from "./xs5/MainApp";
import Xs5 from './xs5/Xs5';

import Amain from "./xs4/Amain";
import UseState1 from "./xs5/UseState1";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Page2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        sx={{
          ".MuiPaper-root": {
            height: "100%",
            padding: "15px 30px",
          },
        }}
      >
        <Grid item xs={4}>
          <Item>
            <Login />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Pv />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {/* <Indexmain/>  */}
            <Amain />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <Xs5/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <MainApp/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
         <UseState1/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
         
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
         
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
         
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
         
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
