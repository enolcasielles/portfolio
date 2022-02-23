
export default function Navbar({ onGoSection }) {
  return (
    <>
      <div className='navbar'>
        <div className="item" onClick={() => {onGoSection('about')}}>SOBRE MÍ</div>
        <div className="item" onClick={() => {onGoSection('skills')}}>HABILIDADES</div>
        <div className="item" onClick={() => {onGoSection('works')}}>TRABAJOS</div>
        <div className="item" onClick={() => {onGoSection('contact')}}>CONTACTO</div>
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
        .item {
          cursor: pointer;
          margin: 10px;
        }
        @media (max-width: 768px) {
          .item {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
