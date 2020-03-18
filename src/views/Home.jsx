import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../styles/lib/header.styles";
import Header from "../components/layouts/HeaderComponent";
import Footer from "../components/layouts/FooterComponent";
import Body from "../components/layouts/Body";

const Home = () => {
  // const classes = useStyles();

  return (
    <Grid>
      <Header />
      <Body/>
      <Footer/>
    </Grid>
  );
};

export default Home;



