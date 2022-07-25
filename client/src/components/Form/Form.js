import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createAtleta, updateAtleta } from '../../actions/atletas';

const Form = ({ currentId, setCurrentId }) => {
  const [atletaData, setAtletaData] = useState({ nome: '', rh: '', idAtleta: '', tags: '', time: '', selectedFile: '' });
  const atleta = useSelector((state) => (currentId ? state.atletas.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    if (atleta) setAtletaData(atleta);
  }, [atleta]);


  const clear = () => {
    setCurrentId(0);
    setAtletaData({ nome: '', rh: '', idAtleta: '', tags: '', time: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validateForm()){
      if (currentId === 0) {
        dispatch(createAtleta(atletaData));
        clear();
      }else{
        dispatch(updateAtleta(currentId, atletaData));
        clear();
      }
    }
  };


  const validateForm = () => {
    //Criador, unico obrigatorio por enquanto
    const element = document.getElementById('idAtleta');
    if (element.value.length === 0) {
      alert("Documento é obrigatorio");
      element.value = "";
      window.setTimeout(() => element.focus(), 0);
      return false;
    }else{
      return true;
    }
  }
  
  return (
    <Paper className={classes.paper}>
      <form 
          autoComplete="off" 
          noValidate 
          className={`${classes.root} ${classes.form}`} 
          onSubmit={handleSubmit}>
        
        <Typography variant="h6">{currentId ? `Editando ${atleta.nome}` : 'Cadastro de atleta'}</Typography>

        <TextField 
          name="nome" 
          id="nome" 
          variant="outlined" 
          label="Nome do atleta" 
          fullWidth 
          value={atletaData.nome} 
          onChange={(e) => setAtletaData({ ...atletaData, nome: e.target.value })} />
        
        <TextField 
          name="rh" 
          variant="outlined" 
          label="Tipo sanguíneo" 
          fullWidth 
          value={atletaData.rh} 
          onChange={(e) => setAtletaData({ ...atletaData, rh: e.target.value })} />

        <TextField 
          name="idAtleta" 
          id="idAtleta"
          variant="outlined" 
          label="Documento" 
          fullWidth 
          value={atletaData.idAtleta} 
          onChange={(e) => setAtletaData({ ...atletaData, idAtleta: e.target.value })} />
        <TextField 
          name="tags" 
          variant="outlined" 
          label="Tags (separado por virgula)" 
          fullWidth value={atletaData.tags} 
          onChange={(e) => setAtletaData({ ...atletaData, tags: e.target.value.split(',') })} />
        <TextField 
          name="time" 
          variant="outlined" 
          label="Time ou Equipe" 
          fullWidth value={atletaData.time} 
          onChange={(e) => setAtletaData({ ...atletaData, time: e.target.value})} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setAtletaData({ ...atletaData, selectedFile: base64 })} />
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth>Submit
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          size="small" 
          onClick={clear} 
          fullWidth>Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
