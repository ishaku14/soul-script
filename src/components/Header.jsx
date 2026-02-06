import './Header.css';

export function Header() {
  return(
    <>
      <div className="header flex justify-between fixed top-0 left-0 right-0 p-4 h-12.5">
        <div className="text-white bg-lime-800 w-50 flex p-50 justify-center">
          <h2 className='text-white font-bold'>SoulScript</h2>
        </div>

        <div className="right-section text-white p-4">
          {/* <img src="" alt="Profile image" /> */}
          right section
        </div>
      </div>
    </>
  );
}