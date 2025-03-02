import { pieces } from "./board-variable";

export function pawnBlackPosition() {
    for (let i = 0; i < 8; i++) {
        pieces.push({
            img: './chessmen/pawn_b.png',
            horizontal: i,
            vertical: 6
        });
    }
}

export function pawnWhitePosition() {
    for (let i = 0; i < 8; i++) {
            pieces.push({
                img: './chessmen/pawn_w.png',
                horizontal: i,
                vertical: 1
            }
        );
    }
}

export function theRestPosition() {
    for (let i = 0; i < 2; i++) {
        const team = i === 0 ? "b" : "w";
        const vertical = i === 0 ? 7 : 0;

        pieces.push({img: `./chessmen/rook_${team}.png`, horizontal: 0, vertical});
        pieces.push({img: `./chessmen/rook_${team}.png`, horizontal: 7, vertical});
        pieces.push({img: `./chessmen/knight_${team}.png`, horizontal: 1, vertical});
        pieces.push({img: `./chessmen/knight_${team}.png`, horizontal: 6, vertical});
        pieces.push({img: `./chessmen/bishop_${team}.png`, horizontal: 2, vertical});
        pieces.push({img: `./chessmen/bishop_${team}.png`, horizontal: 5, vertical});
        pieces.push({img: `./chessmen/queen_${team}.png`, horizontal: 3, vertical});
        pieces.push({img: `./chessmen/king_${team}.png`, horizontal: 4, vertical});
    }
}