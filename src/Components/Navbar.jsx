import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Spacecrafts</Link>
      {" | "}
      <Link to="/launchers">Launchers</Link>
      {" | "}
      <Link to="/CustomerSatellite">CustomerSatellite</Link>
      {" | "}
      <Link to="/Centers">Centers</Link>
    </nav>
  );
}

export default Navbar;