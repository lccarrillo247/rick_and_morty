import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = e => {
      const {value} = e.target;
      // console.log(value);
      setId(value);
   }

   return (
      <div>
         <input 
         type='search'
         onChange={handleChange}
         />
         <button onClick={() => onSearch(Number(id))}>Agregar</button>
      </div>
   );
}
