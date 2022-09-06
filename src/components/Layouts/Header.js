import './Header.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import StoreLogo from "...\sr"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="\navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img className="storeLogo" src='https://cdn-icons-png.flaticon.com/128/869/869432.png' alt='logo'></img>
                    &nbsp;
                    <a className="navbar-brand" href="\">Dukaan</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="\">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="\">Link</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul class="navbar-right">
                            <li><a href="\" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">3</span></a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header