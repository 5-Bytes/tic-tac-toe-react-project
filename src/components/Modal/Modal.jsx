import './Modal.css';

const Modal= ({player})=>{
	return(
		<div className="modal">
			<picture className="modal__picture">
				<img className="modal__picture__img" alt="Corona"src="./assets/corona.png"/>
			</picture>
			<p className="winner__player">{player}</p>
			<button className="modal__btn__replay">Replay</button>
			<button className="modal__btn__start_menu">Start Menu</button>
		</div>
	);
};

export default Modal;