import React from 'react';

const Board = (props) => {
    return (
        <>
            <div className="board">
                {props.board.map((image, i) => {
                    return (
                        <div key={i + 1} onClick={() => props.checkSelection(image)} className="card">
                            <img src={"images/"+image+".png"} alt={image} />
                            <span>{image}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Board;