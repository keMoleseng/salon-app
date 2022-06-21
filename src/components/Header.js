import Navbar from "./Navbar";
import '../header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="heading--container">
                <h1>Trevor Sorbie</h1>
            </div>
            <Navbar />
        </div>
    )
}