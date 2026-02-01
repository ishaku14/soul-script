import { Link } from "react-router";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <div className="header">
        <div className="left-seciton">
          <h2>SoulScript</h2>
        </div>

        <div className="right-seciton">
          {/* <img src="" alt="Profile image" /> */}
        </div>
      </div>

      <div className="main">
        <h2>Verse & Reflection Navigator</h2>
        <p>What speaks to you today?</p>

        <div className="theme-grid-container">
          <Link to="/theme">
            <div className="themes">
              <h3>Faith</h3>
              Explore your spiritual foundations
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <h3>Wisdom</h3>
              Seek knowledge and guidance
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <h3>Strength</h3>
              Find courage in difficult times
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <h3>Hope</h3>
              Discover light in the darkness
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <h3>Peace</h3>
              Quiet your mind and soul
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <h3>Love</h3>
              The greatest of all virtues
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
