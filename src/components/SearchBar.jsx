import "./../styles/SearchBar.css"



const SearchBar = ({handle}) => {
    return (
        <>
        <div className="SearchBar-container">
             <input className="SearchBar-bar" type="text" onChange={handle} placeholder="Search..."/>
        </div>
            
        </>
    );
}

export default SearchBar;