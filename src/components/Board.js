import React, { useState } from 'react';
import Square from './Square';
import Knight from './Knight';

const boardStyle = {
    backgroundColor: 'black',
    height: '50%',
    width: '50%',
    'justify-content': 'center',
    'align-items': 'center',
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid' 
};

const squareStyle = {
    height: '12.5%',
    width: '12.5%'
};

export default function Board() {
    const [knightPosition, setKnightPosition] = useState([0, 1]);

    const moveKnight = (row, col) => {
        if (canKnightMoved(row, col))
            setKnightPosition([row, col]);
    }

    const canKnightMoved = (row, col) => {
        let [knightX, knightY] = knightPosition;

        let x = row - knightX;
        let y = col - knightY;

        return (Math.abs(x) === 2 && Math.abs(y) === 1) ||
            (Math.abs(x) === 1 && Math.abs(y) === 2);
    }

    const handleSquareClick = (row, col) => {
        moveKnight(row, col);
    }

    const renderKnight = (i, [knightX, knightY]) => {
        const col = i % 8;
        const row = Math.floor(i / 8);
        const black = (row + col) % 2 === 1;
        const isknightHere = (row === knightX && col === knightY);
        const knight = isknightHere ? <Knight /> : null;

        return <div onClick={() => handleSquareClick(row, col)}
            key={i}
            style={squareStyle}
        >
            <Square black={black}>{knight}</Square>
        </div>
    }

    const squares = [];
    for (var i = 0; i < 64; i++) {
        squares.push(renderKnight(i, knightPosition));
    }

    return (<div style={boardStyle} className="mt-3 mx-5">
        {squares}
    </div>);
};