
export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        Menu
      </div>

      <style jsx>{`
        .navbar {
          position: absolute;
          height: 80px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}
