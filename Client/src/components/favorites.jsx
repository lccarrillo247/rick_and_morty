import { connect, useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Cards from "./Cards";
import { filterCards, orderCards, reset } from "../redux/actions/actions";


export default function Favorites (){

const dispatch = useDispatch()
const myFavorites = useSelector((state) => state.myFavorites);

function handleOrder(event) {
    dispatch(orderCards(event.target.value));
}

function handleFilter(event) {
    dispatch(filterCards(event.target.value));
}

function resetHandler(event) {
    dispatch(reset());
}


    return (
        <div>
            <select
            placeholder="Gender" onChange={handleFilter}
            >
            {["Male","Female","unknown","Genderless"].map(gender => (
            <option key ={gender} value ={gender}>
                {gender}
                </option>
                ))}
            </select>
            <select
            placeHolder="Sort" onChange={handleOrder}
            >
            {["A","D"].map(orden => (
                <option key={orden} value={orden}>
                {orden}
                </option>
            ))}
            </select>
            <button
            onClick={resetHandler}
            >RESET</button>
            {/* {myFavorites.map(character=><Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            key={character.id}
            // onClose={character.onClose}
            />)} */}
            <Cards
            characters={myFavorites}
            />

        </div>
    )
};

// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps,null)(Favorites);