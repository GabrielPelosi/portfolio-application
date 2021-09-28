import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Menu from './components/menu/Menu'
import './App.scss'
import {useState} from 'react'
import AboutMe from './components/about/AboutMe'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <AboutMe/>
        <Contacts/> 
      </div>
      <div className={"discontinuated__container"}>
        <div className="discontinuated__content">
        <h1>Bem-vindo!</h1>
        <p>Infelizmente o projeto deste portfolio está descontinuado e não receberá mais atualizações,
           não será mais possível conferi-lo,mas o link para o portfolio mais atualizado e que irá receber futuras
          atualizações está logo a seguir caso queira conferir.
        </p>
        <h4>Obrigado por visitar :D</h4>
        <span>Novo portfolio: <a href="https://gabrielpelosi.netlify.app/">LINK</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
