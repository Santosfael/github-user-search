import { Link } from "react-router-dom";

import './styles.css';

function Navbar() {
    return (
        <nav className="main-nav">
            <div>
                <Link to="/">
                    <h4>Bootcamp DevSuperior</h4>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;