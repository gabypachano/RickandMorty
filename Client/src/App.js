import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Error from './components/Error';

function App() {
   const [characters, setCharacters] = useState([])
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'gabrielapachano.13@gmail.com';
   const PASSWORD = 'asd123';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const logout = () => {
      setAccess(false)
   }

   
   
   useEffect(() => {
      !access && navigate('/') // eslint-disable-line react-hooks/exhaustive-deps
   }, [access]);
   
   

   const onSearch = (id, random) => {

      if(random) id = Math.floor(Math.random() * 827) + 1

      if (id < 1 || id > 826) {
         window.alert('Dude, tu numero de ID debe estar entre 1 y 826');
         return;
      }
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Oh! Oh! Estas intentando agregar una card repetida');
         }
         
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter(character => character.id !== id)
      )
   }

// Detail debe aparecer solo en la ruta /detail/:id.

return (
      <div className='App'>
         <Nav onSearch={onSearch} logout={logout} />
         
         <Routes>
            <Route path="/" element ={<Form login={login} />} />
            <Route path="/home" 
            element={<Cards onClose={onClose} characters={characters}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="*" element={<Error/>} />
         </Routes>
      </div>
   );
}

export default App;