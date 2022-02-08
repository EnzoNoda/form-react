import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import User from './User';

export default function FormularioCadastro({onSubmit}){
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados]= useState({})
  useEffect(()=>{
    if(etapaAtual === formularios.length-1){
    onSubmit(dadosColetados)}
  })

  const formularios = [
    <User onSubmit={coletarDados}/>,
    <DadosPessoais onSubmit={coletarDados}/>,
    <DadosEntrega onSubmit={coletarDados}/>,
    <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados})
  
    proximo()
  }

  function proximo(){
    setEtapaAtual(etapaAtual+1)
  }


  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>

    </Stepper>
    {formularios[etapaAtual]}
    </>
  )
}

