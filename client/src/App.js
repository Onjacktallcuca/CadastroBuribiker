import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Atletas from './components/Atletas/Atletas';
import Form from './components/Form/Form';
import { getAtletas } from './actions/atletas';
import useStyles from './styles';
import logo from './images/logo-sem-fundo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAtletas());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color='transparent' >
        <Typography className={classes.heading} variant="h3" align="center">Cadastro de atletas</Typography><br/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color='transparent' >
      <Typography className={classes.heading} variant="h5" align="left">2° Desafio de MTB - Prefeitura de Buritama - 2022</Typography><br/>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </AppBar>
      
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={9}>
              <Atletas setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
