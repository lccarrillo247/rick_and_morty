import SearchBar from "./SearchBar";

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
        </>
    )
}