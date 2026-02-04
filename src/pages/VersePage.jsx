import { Link } from 'react-router';
import './VersePage.css';

export function VersePage() {
  return(
    <>
      <div className='verse-page-header'>
        <h2 className="text-white font-bold">John 3:16</h2>

        <ul className='link-lists'>
          <li><Link to="#">Theme</Link></li>
          <li><Link to="#">Reflections</Link></li>
          <li><Link to="#">Library</Link></li>
        </ul>
      </div>

      <div className="verse-container">
        <button className="bg-transparent text-xs text-blue-600">NEW INTERNATIONAL VERSION</button>

        <div className="verse-content text-4xl text-white">
          "For God so loved the world, that he gave his only begotteh Son, that whosoever believeth in him should not perish but have everlasting life."
        </div>

        <div className="action-buttons">
          <Link to="/reflection">
            <button className="">Reflect on this</button>
          </Link>

          <Link to="/theme">
            <button id="back">Back to theme</button>
          </Link>
        </div>
      </div>

      <div className="footer">
        <div className="top-section"></div>
        <div className='bottom-section'>
          <ul className="footer-links">
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Contact Support</Link></li>
          </ul>
          <p className="date">2026 SoulScript 2026. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}