import React from "react";
import GamesCard from "./GamesCard";

export default function GamesContainer({games, addGameToProfile}){

    const gamesList = games.map((game)=>{
        return <GamesCard key={game.id} game={game} addGameToProfile={addGameToProfile}/>
    })
    return(
        <main>
            <ul className="container">
                {gamesList}
            </ul>
        </main>
    )
}