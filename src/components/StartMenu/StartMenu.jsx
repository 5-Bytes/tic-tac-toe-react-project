import './StartMenu.css';
const StartMenu = ({text,handle}) => {
	
	return(
	<div className="start_menu_block">
		<div className="start_menu_block_text" onClick={handle}>
			<p className="start_menu_text">{text}</p>
		</div>
	</div>		
	)
};

export default StartMenu;