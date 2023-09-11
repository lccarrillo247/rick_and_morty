import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions/actions';
import { useState, useEffect } from 'react';

export function Card(props) {

   const {name,status,species,origin,gender,image,onClose, myFavorites, addFav, removeFav, id} = props;
   const [isFav, setIsFav] = useState(false);

   let character = {name, species, gender, image, id};

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === Number(id)) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   function handleFavorite(character) {
      if (isFav) {
         setIsFav(false)
         removeFav(character.id)
      } else {
         setIsFav(true)
         addFav(character)
      }
      }

   return (
      <div>
         {isFav ? <button onClick={() => handleFavorite(character)}>❤️</button> : <button onClick={() => handleFavorite(character)}>🤍</button>}
          <button onClick={onClose}>X</button>
         <Link to={`/Detail/${props.id}`} >
         <h2>Name: {name}</h2>
         </Link>
         {/* <h2>Status: {status}</h2> */}
         <h2>Species: {species}</h2>
         {/* <h2>Origin: {origin}</h2> */}
         <h2>Gender: {gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);