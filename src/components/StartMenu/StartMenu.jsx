import './StartMenu.css';
import { useState } from 'react';
import title_image from '../../assets/tic-tac-toe-title.png';
import GameMenu from '../GameMenu/GameMenu';

const StartMenu = ({text,setConfigGame}) => {
	
	const [isActive,changeActive] = useState(false);
	
	return(
	<div className="start_menu_container">
		<main className="start_menu_block">
			<picture className="start_menu_block_banner">
				<img src={title_image} alt="banner" className="start_menu_banner"/>
			</picture>
			{isActive && <GameMenu handle={setConfigGame}/>}
			{!isActive && <section className="start_menu_block_text" onClick={()=>changeActive(!isActive)}>
					<p className="start_menu_text">{text}</p>
			</section>}
		</main>		
	</div>
	)
};

export default StartMenu;