//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/layout/header';
import Nav from './components/layout/nav';
import Footer from './components/layout/footer';

import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import NovedadesPage from './pages/NovedadesPage'

function App() {
  return (
    <Router>
      lassName="App">
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" exact element =  {<HomePage /> } />
          <Route path="/nosotros" exact element = { <NosotrosPage /> } />
          <Route path="/novedades" exact element = { <NovedadesPage /> } />
          <Route path="/contacto" exact element = { <ContactoPage /> } />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
