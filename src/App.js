import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import './App.css'; // Dejar importaciones de estilo de últimas
import { useState } from 'react';
import axios from 'axios';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';

import { Route, Routes } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([])

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
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== id))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Routes>
         <Route path="/" element={
         <Cards 
         characters={characters}
         onClose={onClose} 
         />
         }
         />
         <Route path="/About" element={<About />} />
         <Route path="/Detail/:id" element={<Detail />} />
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
