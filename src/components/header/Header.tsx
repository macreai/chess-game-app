import { JSX } from "react";
import { Link } from "react-router";

export default function Header() {
    return (
        <div className="bg-gradient-to-b from-cyan-300 to-blue-600 rounded-b-lg">
            <header>
                <nav>
                    <ul className="flex justify-end gap-6 p-6">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/find-match"}>Find Match</Link></li>
                        <li><Link to={"/main"}>Single Player</Link></li>
                        <li><Link to={"/my-high-score"}>My High Score</Link></li>
                        <li><Link to={"/leaderboard"}>Leaderboard</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}