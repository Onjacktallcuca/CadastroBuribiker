import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Atleta from './Atleta/Atleta';
import useStyles from './styles';

const Atletas = ({ setCurrentId }) => {
  const atletas = useSelector((state) => state.atletas);
  const classes = useStyles();

   return (
     !atletas.length ? <CircularProgress /> : (
       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
         {atletas.map((atleta) => (
           <Grid key={atleta._id} item xs={12} sm={6} md={6}>
             <Atleta atleta={atleta} setCurrentId={setCurrentId} />
           </Grid>
         ))}
       </Grid>
     )
   );
};

export default Atletas;
