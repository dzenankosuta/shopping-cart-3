import "./Slogan.css";
import { Link } from "react-router-dom";
export default function Slogan() {
  return (
    <main className="main-slogan">
      <div className="wrapper-slogan">
        <div className="content">
          <h1>
            Discover<span className="white-text">.</span> Shop
            <span className="white-text">.</span> Enjoy
            <span className="white-text">.</span>
          </h1>
          <h2>
            See our {""}
            <Link className="link-active link-text" to="/products">
              products
            </Link>
            <span className="white-text">.</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
