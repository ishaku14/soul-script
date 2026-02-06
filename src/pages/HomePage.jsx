import { Link } from "react-router";
import { Header } from '../components/Header';
import FaithIcon from '../assets/images/icons/cathedral-icon.png';
import BookIcon from '../assets/images/icons/open-book-icon.png';
import MountainIcon from '../assets/images/icons/mountain-icon.png';
import SunIcon from '../assets/images/icons/icons8-sun.svg';
import PeaceIcon from '../assets/images/icons/three-leaf-clover.png';
import HeartIcon from '../assets/images/icons/blue-heart-icon.svg';

export function HomePage() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center p-4 mt-5">
        <h2 className="text-white text-3xl font-bold mb-3">Verse & Reflection Navigator</h2>
        <p className="text-gray-400">What speaks to you today?</p>

        <div className="grid grid-cols-3 gap-3.75 mt-7.5">
          <Link to="/theme" className="no-underline">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ FaithIcon }  />
              <h3 className="text-white font-bold text-[16px]">Faith</h3>
              Explore your spiritual foundations
            </div>
          </Link>

          <Link to="/theme">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ BookIcon } />
              <h3 className="text-white font-bold text-[16px]">Wisdom</h3>
              Seek knowledge and guidance
            </div>
          </Link>

          <Link to="/theme">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ MountainIcon } />
              <h3 className="text-white font-bold text-[16px]">Strength</h3>
              Find courage in difficult times
            </div>
          </Link>

          <Link to="/theme">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ SunIcon } />
              <h3 className="text-white font-bold text-[16px]">Hope</h3>
              Discover light in the darkness
            </div>
          </Link>

          <Link to="/theme">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ PeaceIcon } />
              <h3 className="text-white font-bold text-[16px]">Peace</h3>
              Quiet your mind and soul
            </div>
          </Link>

          <Link to="/theme">
            <div className="bg-gray-900 flex flex-col gap-1.5 justify-center p-4 text-white h-30 border rounded-xl text-[0.65rem] border-gray-500 border-solid">
              <img className="w-6" src={ HeartIcon } />
              <h3 className="text-white font-bold text-[16px]">Love</h3>
              The greatest of all virtues
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
