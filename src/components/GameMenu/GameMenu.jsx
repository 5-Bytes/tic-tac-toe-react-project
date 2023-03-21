import PlayerConfig from '../PlayerConfig/PlayerConfig';
import Points from '../Points/Points';
import './GameMenu.css';

const GameMenu = ({setConfigGame}) => {
	let paramsGame={iconOne:"pokeball",iconTwo:"superball",points:3};

	const play = () => {
		setConfigGame(paramsGame);
	}

	const getInfoPlayer = ({info,icon,points}) => {
		if(info==="Player 1"){
			paramsGame=Object.assign({...paramsGame},{iconOne:icon})
		}
		if(info==="Player 2"){
			paramsGame=Object.assign({...paramsGame},{iconTwo:icon})
		}
		if(info==="rating"){
			paramsGame=Object.assign({...paramsGame},{points})
		}
	};

	return(
		<div className="game_menu_container">
			<PlayerConfig 
			handle={(params)=> getInfoPlayer(params)} 
			player="PLAYER 1"
			initialValue={0}/>
			<PlayerConfig 
			handle={(params)=> getInfoPlayer(params)} 
			player="PLAYER 2"
			initialValue={1}/>
			<Points handle={(params)=>getInfoPlayer(params)}/>
			<button className="btn-play" onClick={() => play()}>PLAY</button>	
		</div>
	)
}

export default GameMenu;
