import React from "react";
import GamesCard from "./GamesCard";

export default function Profile({games, deleteGames}){
    const gameList = games.map(game=>{
        return <GamesCard key={game.id} games={games} game={game} addGameToProfile={deleteGames}/>
    })
    return(
        <div>
        <h1 className="saved-games">Saved Games</h1>
        {gameList}
        </div>
    )
}