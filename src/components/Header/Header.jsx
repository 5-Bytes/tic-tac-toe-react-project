import { useState } from 'react';
import PlayerConfig from '../PlayerConfig/PlayerConfig';
import Points from '../Points/Points';
import './Header.css';

const Header = ({handle}) => {
	const [isHidden, setHidden] = useState(false);
	let paramsGame={iconOne:"pokeball",iconTwo:"superball",points:3};

	const play = () => handle(paramsGame);

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
		<div className={`Header ${isHidden ?'hidden':''}`}>
			<button className={`btn-hidden ${isHidden ?'' :'active'}`}onClick={()=>setHidden(!isHidden)}>
				<img className={`img-arrow ${isHidden ? '':'active'}`} src="./assets/flecha.png" alt="flecha"/>
			</button>
			<PlayerConfig 
			handle={(params)=> getInfoPlayer(params)} 
			player="Player 1"
			initialValue={0}/>
			<PlayerConfig 
			handle={(params)=> getInfoPlayer(params)} 
			player="Player 2"
			initialValue={1}/>
			<Points handle={(params)=>getInfoPlayer(params)}/>
			<button className="btn-play" onClick={()=> play()}>Play</button>	
		</div>
	)
}

export default Header;
