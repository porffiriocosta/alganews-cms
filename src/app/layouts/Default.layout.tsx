import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import SessionController from '../components/SessionController'
import * as DL from './Default.layout.styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayoyt (props: DefaultLayoutProps) {
  return <DL.Wrapper>
    <DL.Header>
      <Logo />
    </DL.Header>
    <DL.Main>
      <DL.Navigation>
        <NavBar />
      </DL.Navigation>
      <DL.FeaturedContent>
        { props.children }
      </DL.FeaturedContent>
      <DL.Aside>
        <SessionController
          name="Reginaldo P Costa"
          description="Analista de Sistemas há 6 anos"
        />
      </DL.Aside>
    </DL.Main>
  </DL.Wrapper>
}

export default DefaultLayoyt