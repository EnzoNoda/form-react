import React, {useState, useContext} from 'react';
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import Button from '@mui/material/Button/'
import { TextField } from '@mui/material/';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import useErros from '../hooks/useErros';

function DadosPessoais({onSubmit}){
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(possoEnviar()){
      onSubmit({nome, sobrenome, cpf, novidades, promocoes})}
    }}>
      <TextField value={nome} onChange={event => setNome(event.target.value) }
      id="nome" label="Nome" margin='normal'name='nome' fullWidth required/>
      <TextField value={sobrenome} name='sobrenome' onChange={event => setSobrenome(event.target.value) }
      id="sobrenome" label="Sobrenome"  margin='normal' fullWidth required/>
      <TextField value={cpf} onChange={event => setCpf(event.target.value) }
      error={!erros.cpf.valido} helperText={erros.cpf.texto} onBlur={validarCampos}
      name='cpf'
      id="cpf" label="CPF" margin='normal' fullWidth required/>
      <FormControlLabel control={<Switch onChange={(event)=> setPromocoes(event.target.checked)} name='promocoes' checked={promocoes}/>} label="Promoções"/>
      <FormControlLabel control={<Switch onChange={(event)=> setNovidades(event.target.checked)} name='novidades' checked={novidades}/>} label="Novidades"/>

      <Button variant='contained' color='primary' type='submit'>Proximo</Button>
    </form>
  )
}
export default DadosPessoais