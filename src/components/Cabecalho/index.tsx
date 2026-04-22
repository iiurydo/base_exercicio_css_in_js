import styled from 'styled-components'

const Titulo = styled.h1`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

function Cabecalho() {
  return (
    <header>
      {/* <h1>EBAC Jobs</h1> */}
      <Titulo>EBAC Jobs</Titulo>
    </header>
  )
}

export default Cabecalho
