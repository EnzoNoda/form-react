import './App.css'
import FormularioCadastro from './components/FormularioCadastro'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css'
import { validarCPF, validarSenha } from '../src/models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha }}
      >
        <FormularioCadastro onSubmit={sendForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

function sendForm(data) {
  console.log(data)
}

export default App
