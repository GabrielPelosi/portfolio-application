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
    </div>
  );
}

export default App;
