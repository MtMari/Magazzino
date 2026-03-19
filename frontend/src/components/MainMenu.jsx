import { Link } from "react-router-dom";

function MainMenu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary-subtle p-4 mb-5" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="bi bi-upc-scan fs-1"></i></Link>
                    <div>
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainMenu;