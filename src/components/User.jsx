import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import useErros from '../hooks/useErros';

export default function({onSubmit}){

  const[email, setEmail]=useState("")
  const[senha, setSenha]=useState("")
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar]=useErros(validacoes)

  
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(possoEnviar()){
        onSubmit({email, senha})
      }
      }}
    >
      <TextField name='email' value={email} onChange={(event)=>{setEmail(event.target.value)}} id='email' label='email' type='email' margin='normal' fullWidth required/>
      <TextField name='senha' onBlur={validarCampos} error={!erros.senha.valido} helperText={erros.senha.texto}  value={senha} onChange={(event)=>{setSenha(event.target.value)}} id='senha' label='senha' type='password' margin='normal' fullWidth required/>
      <Button type='submit' variant='contained' color='primary'>Proximo</Button>
    </form>
  )
}