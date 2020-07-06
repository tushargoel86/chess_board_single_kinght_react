import React from 'react';
import Board from './components/Board';
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from 'react-bootstrap';
import ChessBoardNavBar from './components/ChessBoardNavBar';

export default function App() {
    return (
        <Container> 
            <ChessBoardNavBar/>
            <Board/>
        </Container>
    );
}