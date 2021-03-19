import React, { useState } from 'react';
import Board from './Board';
import GameResult from './GameResult';

const App = () => {

    let boardSize = 6;

    let images = [
        'ant','bear','bee',
        'bird','ant','camel',
        'cat','caterpillar','chicken',
        'cow','crab','crocodile',
        'deer','dog','dolphin',
        'donkey','fish','giraffe'
    ];

    const getRandomImages = (amount) => {
        let items = [];
        let item;
        while(items.length < amount) {
            item = images[Math.floor(Math.random()*images.length)];
            if(!items.includes(item)) items.push(item);
        }
        return items;
    };

    const [board, setBoard] = useState(getRandomImages(boardSize));
    const [selections, setSelections] = useState([]);
    const [points, setPoints] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const reloadBoard = () => {
        setBoard(getRandomImages(boardSize));
    };

    const checkSelection = (image) => {
        if(selections.includes(image)) {
            setGameOver(true);
        } else {
            setSelections(prevState => prevState.concat(image));
            setPoints(prevState => prevState + 1);
            reloadBoard();
        }
    };

    const restartGame = () => {
        if(points > bestScore) setBestScore(points);
        setSelections([]);
        setPoints(0);
        reloadBoard();
        setGameOver(false);
    };

    return (
        <>
            <h1>Memory Card Game</h1>
            <div className="container">
                <div className="score">
                    <div className="points">Points: <b>{points}</b></div>
                    <div className="best-score">Best score: <b>{bestScore}</b></div>
                </div>
                {!gameOver ? 
                    <Board 
                        board={board}
                        checkSelection={checkSelection}
                    />
                    :
                    <GameResult 
                        restartGame={restartGame} 
                        points={points}
                        bestScore={bestScore}
                    />
                }
            </div>
            <div className="footer">
                Created by <a href="https://github.com/danisolo91">Daniel Solomon</a>
            </div>
        </>
    );
};

export default App;