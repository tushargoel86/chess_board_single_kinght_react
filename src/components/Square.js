import React from 'react';

export default function Square({ black, children }) {

    const bgColor = black ? 'black' : 'white';
    const pieceColor = black ? 'white' : 'black';

    return (<div style={{ backgroundColor: bgColor, height: '10vh', width: '100%', color: pieceColor }}>{children}</div>);

}