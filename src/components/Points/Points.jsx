import { useState,useEffect } from 'react';
import './Points.css';

const Points = ({handle}) => {
	
	const [points,setPoints] = useState(3);

	useEffect(()=>{
		handle({info:"rating",points})
	},[points,handle])

	const up = () => setPoints(points + 1);
	const down = () => (points===1)?setPoints(1):setPoints(points-1);

	return (
		<div className="points-container">
			<div className="block-points-paragraph">
				<p className="points-paragraph">POINTS</p>
			</div>
			<div className="points-button-container">
				<button className="points-button" onClick={()=> down()}>
					<img className="points-button-img" alt ='img-flecha'src="./assets/angulo-izquierdo.svg"/>
				</button>
				<output className="points-output">{points}</output>
				<button className="points-button"onClick={()=> up()}>
					<img className="points-button-img" alt='img-flecha'src="./assets/angulo-derecho.svg"/>
				</button>
			</div>
		</div>
	)
};

export default Points;