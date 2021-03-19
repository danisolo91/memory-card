import React from 'react';

const GameResult = (props) => {

    return (
        <div className="result">
            {props.points > props.bestScore ?
                <>
                    <h2>Congratulations!</h2>
                    <h3>You have achieved a new Best Score</h3>
                </> :
                <>
                    <h2>Game Over</h2>
                    <h3>You made it quite good, but try to beat the best score!</h3>
                </>
            }
            <button onClick={props.restartGame}>Play again!</button>
        </div>
    );
};

export default GameResult;