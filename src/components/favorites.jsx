import { connect } from "react-redux";
import Card from "./Card";


export function Favorites ({myFavorites}){
    return (
        <div>
            {myFavorites.map(character=><Card
            // name={character.name}
            // species={character.species}
            // gender={character.gender}
            // image={character.image}
            // key={character.id}
            // onClose={character.onClose}
            />)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);