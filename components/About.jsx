import React from 'react'

export default function About() {
  return (
    <>
      <div className="section-bg about" id="about">
        <div className="container">
          <h1 className="section-title">
            SOBRE MÍ
          </h1>
          <div className="content">
            <p>
              ¡Hola! Mi nombre es Enol Casielles. Trabajo como desarrollador Full Stack haciendo aplicaciones móviles y sitios web a medida. A lo largo de los últimos 10 años he particidado en numerosos proyectos tanto de front como de back y usando distitnas tecnologías.
            </p>
            <p>
              Dedico una parte importante de mi tiempo en formación, lo que me permite estar siempre al tanto de las últimas tecnologías y ofrecer siempre la mejor solución para cada proyecto.
            </p>
            <p>
              Más recientemente me estoy abriendo y formando en el sector de la Visión Artificial y Realidad Aumentada, participando ya en algun proyecto interesante.
            </p>
            <p>
              No dudes en contactarme si tienes un proyecto o idea que quieras poner en marcha y necesitas de alguien que te lleve la tecnología o simplemente asesoramiento.
            </p>
          </div>
          <div className="button-container">
            <button className='button'>Contactar</button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about {
          padding-top: 30px;
        }
        .container {
          text-align: center;
        }
        .section-title {
          color: #3a3a3a;
          margin-bottom: 34px;
        }
        .content p {
          font-size: 18px;
          line-height: 25px;
          font-weight: 300;
        }
        .button-container {
          padding-top: 30px;
          padding-bottom: 80px;
        }
      `}</style>

    </>
  )
}
