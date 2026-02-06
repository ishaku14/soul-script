import { Link } from 'react-router';

export function VersePage() {
  return(
    <>
      <div className='flex justify-between p-4 border-b border-b-gray-600 mb-5 fixed top-0 left-0 right-0 z-10 h-12.5'>
        <h2 className="text-white font-bold">John 3:16</h2>

        <ul className="list-none flex gap-3.75">
          <li><Link className="underline-none text-gray-300 text-[0.7rem]" to="#">Theme</Link></li>
          <li><Link className="underline-none text-gray-300 text-[0.7rem]" to="#">Reflections</Link></li>
          <li><Link className="underline-none text-gray-300 text-[0.7rem]" to="#">Library</Link></li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center m-40">
        <button className="bg-transparent text-xs text-blue-600">NEW INTERNATIONAL VERSION</button>

        <div className="text-4xl text-white w-screen max-w-150 text-center mb-5 mt-2.5">
          "For God so loved the world, that he gave his only begotteh Son, that whosoever believeth in him should not perish but have everlasting life."
        </div>

        <div className="mb-5">
          <Link to="/reflection">
            <button className="bg-blue-600 text-white text-[0.7rem] px-5 cursor-pointer mr-3 rounded-md py-2.5">Reflect on this</button>
          </Link>

          <Link to="/theme">
            <button className="bg-transparent text-white text-[0.7rem] px-5 cursor-pointer mr-3 rounded-md py-2.5 border border-solid border-gray-400">Back to theme</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col border-t border-t-gray-600">
        <div className="flex justify-center items-center p-2 border-b border-b-gray-600"></div>
        <div className='flex flex-col items-center w-full p-2'>
          <ul className="list-none w-full flex justify-around">
            <li><Link className="no-underline text-gray-400 text-[0.7rem]" to="#">Privacy Policy</Link></li>
            <li><Link className="no-underline text-gray-400 text-[0.7rem]" to="#">Terms of Service</Link></li>
            <li><Link className="no-underline text-gray-400 text-[0.7rem]" to="#">Contact Support</Link></li>
          </ul>
          <p className="text-gray-600 text-[0.7rem]">2026 SoulScript 2026. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}