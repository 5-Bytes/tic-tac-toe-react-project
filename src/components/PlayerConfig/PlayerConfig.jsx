import { useState,useEffect } from 'react';
import './PlayerConfig.css';

const PlayerConfig = ({player,initialValue,handle}) => {
	
	const [pokeball, setPokeball]=useState(initialValue)
	const listPokeball=["pokeball","superball","ultraball","masterball"];

	useEffect(()=>{
		handle({info:player,icon:listPokeball[pokeball]})
	},[pokeball,handle,player]);

	const leftImg = () =>{
		(pokeball === 0)
		?setPokeball(listPokeball.length-1)
		:setPokeball(pokeball-1)
	};
	
	const rightImg = () => {
		(pokeball === (listPokeball.length - 1))
		?setPokeball(0)
		:setPokeball(pokeball + 1)
	};
	
	return (
		<div className="player-container">
			<div className="player-name-block">
				<p className="player-name">{player}</p>
			</div>
			<div className="player-block">
				<button className="player-button" onClick={()=> leftImg()}>
					<img className= "player-button-img left" src="./assets/flecha.png"/>
				</button>
				<img className="player-img"
				src={`./assets/${listPokeball[pokeball]}.png`}
				alt="No se pudo mostrar"/>
				<button className="player-button" onClick={()=> rightImg()}>
					<img className="player-button-img "src="./assets/flecha.png"/>
				</button>
			</div>
		</div>
	);
}

export default PlayerConfig;