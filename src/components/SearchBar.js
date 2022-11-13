import React from "react";

export default function SearchBar({search, searchForGames, filterby, setFilterBy}){
    const filterGenre = (e) =>{
        setFilterBy(e.target.value)
    }

    return(
        <div className="searchbar">
            <form>
                <label>Search by Name: </label>
                    <input type="text" id="search" value={search} onChange={(e)=>searchForGames(e.target.value)}/><br></br>
                <label>Filter by Genre: </label>
                    <select onChange={filterGenre} value={filterby}>
                        <option value="Strategy">Strategy</option>
                        <option value="ARPG">ARPG</option>
                        <option value="Shooter">Shooter</option>
                        <option value="MMORPG">MMORPG</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Action RPG">Action RPG</option>
                        <option value="Battle Royale">Battle Royale</option>
                        <option value="Card Game">Card Game</option>
                        </select>
            </form>
        </div>
    )
}