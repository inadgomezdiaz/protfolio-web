import './App.css';
import Home from './componentes/Home';
import Works from './componentes/Works';
import AboutMe from './componentes/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from './componentes/ContactMe';
import NavBar from './componentes/NavBar';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div className="contenedor-pagina">
        <Home />
        <Works />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
