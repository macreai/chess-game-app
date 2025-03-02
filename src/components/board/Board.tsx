import React from 'react';
import '../../index.css';
import { horizontalAxis, pieces } from './board-variable';
import { pawnBlackPosition, pawnWhitePosition, theRestPosition } from './initiate-chessmen-pos';
import Tiles from './Tiles';

export default function Board() {

    pawnBlackPosition();
    pawnWhitePosition();
    theRestPosition();

    let activePiece: HTMLElement | null = null;

    const grabPiece = (e: React.MouseEvent) => {
        const element: HTMLElement = e.target as HTMLElement;
        if (element.classList.contains('chess-piece')) {
            console.log(e);

            const x = e.clientX;
            const y = e.clientY;
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            activePiece = element;
        }
    };

    const movePiece = (e: React.MouseEvent) => {
        if (activePiece) {
            const x = e.clientX;
            const y = e.clientY;
            activePiece.style.position = 'absolute';
            activePiece.style.left = `${x}px`;
            activePiece.style.top = `${y}px`;
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const releasePiece = (e: React.MouseEvent) => {
        if (activePiece) {
            activePiece = null;
        }
    }
    

    const board = [];

    for (let i = horizontalAxis.length - 1; i >= 0; i--) {
        for (let j = 0; j < horizontalAxis.length; j++) {

            let img = undefined;

            pieces.forEach((piece) => {
                if (piece.vertical === i && piece.horizontal === j) {
                    img = piece.img;
                }
            });
            
            const tile: number = i + j + 2;

            if (tile % 2 === 0) {
                board.push(
                    <Tiles key={`${horizontalAxis[j]}${i+1}`} color='bg-blue-200' horizontal={horizontalAxis[j]} vertical={i+1} img={img}/>
                );
            } else {
                board.push(
                    <Tiles key={`${horizontalAxis[j]}${i+1}`} color='bg-cyan-500' horizontal={horizontalAxis[j]} vertical={i+1} img={img}/>
                );
            }
        }
    }

    return (
        <div
        onMouseMove={e => movePiece(e)}
        onMouseDown={e => grabPiece(e)}
        onMouseUp={e => releasePiece(e)}
        className="grid grid-cols-8 grid-rows-8 w-[800px] h-[800px]">
            {board}
        </div>
    )
}