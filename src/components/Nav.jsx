import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';

export default function Nav(props) {

    const aleatorio = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
        <SearchBar onSearch={props.onSearch} />
        <button
        onClick={() => props.onSearch(aleatorio(826))}
        >Random</button>
        <NavLink to="/About">
            <button>About</button>
        </NavLink>
        <NavLink to="/">
            <button>Home</button>
        </NavLink>
        </>
        )
}