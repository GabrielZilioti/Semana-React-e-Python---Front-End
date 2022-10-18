import type { NextPage } from 'next'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import { CabecalhoContainer, Logo } from '../src/components/Cabecalho/Cabecalho.style'

const Home: NextPage = () => {
  return (
    <CabecalhoContainer>
      <div>
        <Logo src="/images/myteacher.png"/>
      </div>
      <p>Encontre o professor perfeito</p>
    </CabecalhoContainer>
  )
}

export default Home
