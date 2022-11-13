import React, { useState } from "react";

export default function GamesCard({games, game, addGameToProfile}){
    const [isSaved, setIsSaved] = useState(false)

// IF GAME IS ALREADY IN PROFILE CHANGE BUTTON TO REMOVE
    const savedgame = games && games.length > 0 ? games.find(e=>{
       return e.id === game.id
    }) : false

    const clicked = () =>{
        setIsSaved(isSaved=> !isSaved)
        addGameToProfile(game)
    }

    return(
        <div className="card">
            <div className="card-img">
                <img src={game.thumbnail} alt="game pic"/>
            </div>
            <div className="details">
                <h4>{game.title}</h4>
                <p><em>Genre:</em> {game.genre}</p>
                <p><em>Description:</em> {game.short_description}</p>
                <p><em>Release Date:</em> {game.release_date}</p>
                <p><em>Publisher:</em> {game.publisher}</p>
                <a href={game.game_url}>Offical Game</a>
                {!savedgame ? <button className="button" onClick={clicked}>{!isSaved ? "Save" : "Saved"}</button> :
                <button className="button" onClick={clicked}>Remove</button>}
            </div>
        </div>
    )
}