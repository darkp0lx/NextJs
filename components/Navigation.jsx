import Link from "next/link";
import "./Container.module.css"
const Navigation = () => {
  return (
    <nav style={{position:"fixed",width:"100%"}} className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">BatmanFilms 🦇 </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/About">
                <a className="nav-link active">About</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/Servicios">
                <a className="nav-link">Servicios</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
