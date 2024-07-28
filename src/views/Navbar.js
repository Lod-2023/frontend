import { useContext } from "react";
import { jwtDecode } from "jwt-decode"; // Esto se puede quitar si no se usa jwtDecode en este archivo.
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const { token, logoutUser } = useContext(AuthContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img style={{width:"70px", padding:"6px"}} src="https://avatars.githubusercontent.com/u/137128433?s=48&v=4" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {token === null &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Registrar</Link>
                                    </li>
                                </>
                            }

                            {token !== null &&
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/dashboard">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Cerrar sesión</a>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
