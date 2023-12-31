import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from './Detail.module.css';

export default function Detail() {

    const {id} = useParams(); //UseParams trae un objeto, puedo ver lo que tiene con console log, console.log(useParams())

    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <h1 className={styles.detailName}>{character.name}</h1>
            <h2 className={styles.detailx2}>STATUS | {character.status}</h2>
            <h2 className={styles.detailx2}>SPECIES | {character.species}</h2>
            <h2 className={styles.detailx2}>GENDER | {character.gender}</h2>
            {character.origin && <h2 className={styles.detailx2}>ORIGIN | {character.origin.name}</h2>}
            <img src={character.image} alt={character.name} />
        </div>
    )
}