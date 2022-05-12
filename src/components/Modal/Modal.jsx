import './Modal.css';

const Modal= ({player})=>{
	return(
		<div className="modal">
			<picture className="modal__picture">
				<img className="modal__picture__img" alt="Corona"src="./assets/corona.png"/>
			</picture>
			<p className="winner__player">{player}</p>
		</div>
	);
};

export default Modal;