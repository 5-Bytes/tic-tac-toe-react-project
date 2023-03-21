import './Modal.css';

const Modal = ({player, replayBtn, startBtn})=>{
	return(
		<div className="modal">
			<picture className="modal__picture">
				<img className="modal__picture__img" alt="Corona"src="./assets/corona.png"/>
				<p className="winner__player">{player}</p>
			</picture>
			<div className="modal__button__container">
				<button className="modal__btn__replay" onClick = {replayBtn}>Replay</button>
				<button className="modal__btn__start_menu" onClick = {startBtn}>Start Menu</button>
			</div>	
		</div>
	);
};

export default Modal;