import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import './App.css'; // Dejar importaciones de estilo de últimas
import { useEffect, useState } from 'react';
import axios from 'axios';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Error from './components/Error.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/favorites.jsx';
import { removeFav } from './redux/actions/actions.js';
import { useDispatch } from 'react-redux';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([])

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const EMAIL = 'a@b.com'
   const PASSWORD = 'abc123'

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   };

   function logout() {
      setAccess(false);
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const example = {
   //    id: 1,
   //    name: 'Rick Sanchez',
   //    status: 'Alive',
   //    species: 'Human',
   //    gender: 'Male',
   //    origin: {
   //       name: 'Earth (C-137)',
   //       url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // };

   function onSearch(id) {
      if (characters.find((element) => element.id === id)) {
         window.alert('El personaje ya existe')
         } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
}

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== id))
      dispatch(removeFav(id))
   };

   const location = useLocation();

   return (
      <div className='App'>
         {location.pathname === "/" ? null : <Nav
         logout={logout}
         onSearch={onSearch}/>}
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes>
         <Route exact path='/' element={<Form
         login={login}
         />} />
         <Route path="/Home" element={
         <Cards 
         characters={characters}
         onClose={onClose} 
         />
         }
         />
         <Route path="/About" element={<About />} />
         <Route path="/Detail/:id" element={<Detail />} />
         <Route path="*" element={<Error />} />
         <Route path="/favorites" element={<Favorites

          />} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         </Routes>
      </div>
   );
}

export default App;
