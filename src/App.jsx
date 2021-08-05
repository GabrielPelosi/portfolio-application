import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import './App.scss'



function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contacts/> 
      </div>
    </div>
  );
}

export default App;
