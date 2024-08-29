
import 'bootstrap/dist/css/bootstrap.min.css';
import Funcionalidades from './Funcionalidades/Funcionalidades';
import Header from './Header/Header';
import Sobre from './Sobre/Sobree';
import Contato from './Contato/Contato';
import Cadastro from './Cadastro/Cadastro';
import Entrar from './Entrar/Entrar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserA from './UserA/UserA';
import './App.css'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/usera" element={<UserA />} />


      </Routes>
    </Router>
  );
};

const Home = () => (
  <div>

    <section id="sobre">
      <Sobre />
    </section>
    <Funcionalidades />
    <section id="contato">
      <Contato />
    </section>
  </div>
);


export default App;
