import Card from './Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {

   return <div className={styles.cardsContainer}>
      {characters.map((character) => (
      <Card
      id={character.id}
      key={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin?.name}
      image={character.image}
      onClose={() => onClose(character.id)}
      // props={character}
      />
       ))}
   </div>;
}