import Search from './search';

const Search = () => {
    return <div>Hello world!</div>
}

export default Search;

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;