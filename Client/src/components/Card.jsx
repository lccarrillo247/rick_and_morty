import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions/actions';
import { useState, useEffect } from 'react';
import styles from './Card.module.css';


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

      const location = useLocation();

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
         {isFav ? <button onClick={() => handleFavorite(character)}>❤️</button> : <button onClick={() => handleFavorite(character)}>🤍</button>}
          {location.pathname !== "/favorites" && <button className={styles.xButton} onClick={onClose}>X</button>}
         </div>
          <img className={styles.image}src={image} alt={name} />
         <div className={styles.nameContainer}>            
         <Link to={`/Detail/${props.id}`} >
         <h2>{name}</h2>
         </Link>
         </div>
         <div className={styles.dataContainer}>
         {/* <h2>Status: {status}</h2> */}
         <h2>{species}</h2>
         {/* <h2>Origin: {origin}</h2> */}
         <h2>{gender}</h2>
         </div>
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