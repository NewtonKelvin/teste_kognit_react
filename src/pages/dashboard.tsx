import React from "react";
import { MainContainer } from "../styles/dashboard";
import Navbar from "../components/navbar";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <MainContainer container flexDirection={"column"}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>ASD</Grid>
      </MainContainer>
    </>
  );
};

export default Dashboard;
