import React, { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import NavBar from './NavigationBar';
import SearchBar from './SearchBar';
import GamesContainer from './GamesContainer';
import Profile from './Profile';
import Home from './Home';
// COMPONENT TREE:
// ├── APP
// |   ├── HOME
// |   ├── NAVBAR
// |   ├── SEARCHBAR
// |   ├── GAMESCONTAINER
// |   |      └─GAMESCARD
// |   └── PROFILE
// |        └─GAMESCARD
export default function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '07b91a6f90msh4b65a94796419bfp1c1f1djsn58b0e90750b2',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")
  const [filterby, setFilterBy] = useState("Strategy")
  const [gamesToDisplay,setGamesToDisplay] = useState([])
  const [savedgames, setSavedGames] = useState([])
  
  const fetchGames = () =>{
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
    .then(response => response.json())
    .then(games => {
      setGames(games)
      setGamesToDisplay(games)})
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchGames()
  },[])

  useEffect(()=>{
    searchGames(search)
  },[search,filterby])

// ADD SAVED GAMES TO PROFILE
  const addGameToProfile = (addedGames) =>{
    const gameProflie = savedgames.find(game=>game.id === addedGames.id)
    if(!gameProflie){
      setSavedGames([...savedgames, addedGames])
    }
  }

// DELETE GAMES FROM PROFILE
  const deleteGames = (removeGame) =>{
    setSavedGames((savedgames)=>savedgames.filter((game)=> game.id !== removeGame.id))
  }

// FILTER GAMES BY GENRE
  const gamesList = search.length > 0 ? gamesToDisplay.filter((game)=> game.genre === filterby) : games.filter((game)=> game.genre === filterby)

// SEARCH GAMES BY TITLE
  const searchGames = (search) =>{
    setGamesToDisplay(prevState=>{
      return gamesList.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()))
    })
  }

  return (
    <div className='App'>
          <NavBar />
      <Routes>
        <Route path={"/games"} element={<>
          <SearchBar 
            search={search}
            searchForGames={setSearch}
            filterby={filterby}
            setFilterBy={setFilterBy}/>
            <GamesContainer games={gamesList} 
            addGameToProfile={addGameToProfile}/>
            </>} />
          <Route path={"/profile"} element={<Profile 
          games={savedgames}
          deleteGames={deleteGames} />} />
          <Route path={"/"}element={<Home/>} />
      </Routes>
    </div>
  );
}