import SearchBar from "./SearchBar";

export default function Nav(props) {
    return (
        <SearchBar onSearch={props.onSearch} />
    )
}