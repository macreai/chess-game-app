import { Tile } from './tile-model';

export default function Tiles(tile: Tile) {
    return (
        <div className={`w-[100px] h-[100px] text-[0.7rem] ${tile.color}`}>
            [{tile.horizontal}{tile.vertical}]
            {tile.img && (
                <div className='flex justify-center hover:cursor-grab active:cursor-grabbing'>
                    <div style={{backgroundImage: `url(${tile.img})`}} className='chess-piece flex bg-center w-[100px] h-[100px] bg-no-repeat' />
                </div>
            )}
        </div>
    )
}