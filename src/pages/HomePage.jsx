import { Link } from "react-router";
import { Header } from '../components/Header';
import FaithIcon from '../assets/images/icons/cathedral-icon.png';
import BookIcon from '../assets/images/icons/open-book-icon.png';
import MountainIcon from '../assets/images/icons/mountain-icon.png';
import SunIcon from '../assets/images/icons/icons8-sun.svg';
import PeaceIcon from '../assets/images/icons/three-leaf-clover.png';
import HeartIcon from '../assets/images/icons/blue-heart-icon.svg';
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="main">
        <h2 className="text-white text-3xl font-bold">Verse & Reflection Navigator</h2>
        <p className="text-gray-400">What speaks to you today?</p>

        <div className="theme-grid-container">
          <Link to="/theme">
            <div className="themes">
              <img src={ FaithIcon }  />
              <h3 className="text-white font-bold ">Faith</h3>
              Explore your spiritual foundations
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <img src={ BookIcon } />
              <h3>Wisdom</h3>
              Seek knowledge and guidance
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <img src={ MountainIcon } />
              <h3>Strength</h3>
              Find courage in difficult times
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <img src={ SunIcon } />
              <h3>Hope</h3>
              Discover light in the darkness
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <img src={ PeaceIcon } />
              <h3>Peace</h3>
              Quiet your mind and soul
            </div>
          </Link>

          <Link to="/theme">
            <div className="themes">
              <img src={ HeartIcon } />
              <h3>Love</h3>
              The greatest of all virtues
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
