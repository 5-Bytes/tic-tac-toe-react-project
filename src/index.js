import React, { useState,useEffect } from 'react';
import { render } from 'react-dom';
import './index.css';
import Modal from './components/Modal/Modal';
import StartMenu from './components/StartMenu/StartMenu';
import GameMenu from './components/GameMenu/GameMenu';
import title_image from './assets/tic-tac-toe-title.png';

const Square = (props) => {
	return(
		<button className="square"
		onClick={props.onClick}
		>
			{props.children}
		</button>
		);
};

const Board = (props) => {
	
	const renderSquare = (i) => {
    return (
		<Square 
		onClick={() =>
		props.onClick(i)}>
			{props.squares[i] && <img className='icon-player' alt="pokeball" src={`./assets/${props.squares[i]}.png`} />}
		</Square>
		);
	};

 	return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  )
};

const Game = (props) => {

	const [playerOneIsNext,setPlayerOneIsNext] = useState(true);
	const [paramsGame,setParamsGame] = useState({playerOne:null,playerTwo:null,points:null});
	const [squares,setSquares] =useState(Array(9).fill(null));
	const [rating,setRating] = useState({playerOne:0,playerTwo:0});
	const [visibility,changeVisibility] = useState({
		Modal:false,
		StartMenu:true,
		GameMenu:false,
		Game:false,
	});
	const [winner,setWinner]= useState(null);

	const resetSquares= () => {
		setSquares(Array(9).fill(null))
		setPlayerOneIsNext(true);
	};

	useEffect(()=>{
		let winner=calculateWinner(squares);
		
		if(!winner && !squares.includes(null)){
				console.log("empate");
				resetSquares();
				return;
		}
		if(rating.playerOne === paramsGame.points){
				setWinner("Player 1")
				changeVisibility(Object.assign({},visibility,{Modal:true,Game:false}))
				return;
		}

		if(rating.playerTwo===paramsGame.points){
				setWinner("Player 2");
				changeVisibility(Object.assign({},visibility,{Modal:true,Game:false}))
				return;
		}

		if(winner){
			if(winner===paramsGame.playerOne)
				setRating({playerOne:rating.playerOne+1,playerTwo:rating.playerTwo});
			if(winner===paramsGame.playerTwo)
				setRating({playerOne:rating.playerOne,playerTwo:rating.playerTwo+1});
			resetSquares();
			return;
		}
	},[squares,rating,paramsGame]);

	const handleClick= (i) => {

		if(paramsGame.playerOne && paramsGame.playerTwo && paramsGame.points){
			setPlayerOneIsNext(!playerOneIsNext)		
		}

		setSquares(squares.map((prevSquare,index) => {
			if(prevSquare !== null){
				return prevSquare;
			}
			if(index===i){
				return playerOneIsNext? paramsGame.playerOne: paramsGame.playerTwo;
			}
			return null;
			}));
	};

	const receiveParamsGame = ({iconOne,iconTwo,points}) => {
		setParamsGame({playerOne:iconOne,playerTwo:iconTwo,points});
		changeVisibility(Object.assign({},visibility,{Game:true,GameMenu:false}))
	};
	
	const handleStartMenu = () => {
		changeVisibility(Object.assign({},visibility,{StartMenu:false,GameMenu:true}));
	};
	
	const handleReplayBtn = () => {
		setRating({playerOne:0,playerTwo:0});
		changeVisibility(Object.assign({},visibility,{Game:true,Modal:false}));
	}
	
	const handleStartBtn = () => {
		setParamsGame({playerOne:null,playerTwo:null,points:null});
		setRating({playerOne:0,playerTwo:0});
		changeVisibility(Object.assign({},visibility,{StartMenu:true,Modal:false}))
	}
	
  return (
	 <div className="game">
			<picture className="title-image-block">
				<img src={title_image} alt="banner" className="title-image"/>
			</picture>
			{visibility.StartMenu && <StartMenu text="Touch!"
				handle= {handleStartMenu} />}
			{visibility.GameMenu && <GameMenu 
				setConfigGame={(config)=> receiveParamsGame(config)}
			/>}
			{visibility.Modal && <Modal player={winner}
			replayBtn={handleReplayBtn}
			startBtn={handleStartBtn}
			/>}
			{visibility.Game && <div className="game-ratings-block">
				<p className="game-ratings">{`${rating.playerOne}:${rating.playerTwo}`}</p>
			</div>}
			{visibility.Game && <div className="board-container">
				<Board
					className="game-board"
					squares={squares}
					onClick={(i)=>handleClick(i)}
					/>
			</div>}
	</div>);
}

// ========================================

render(
  <React.StrictMode>
  	<Game />
  </React.StrictMode>,
  document.getElementById('root')
);

function calculateWinner(squares){
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[2,5,8],
		[0,4,8],
		[2,4,6],
		[1,4,7],
	];
	for(let i = 0; i < lines.length; i++){
		const [a,b,c] = lines[i];
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	return null;
}