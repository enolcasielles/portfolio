import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <h1 className="section-title">
            CONTACTO
          </h1>
          <div className="content">
            <div className="section">
              <h5>Agendar una llamada</h5>
              <p> ¿Quieres realizar cualquier consulta para cualquier idea o proyecto que tengas en marcha? Agenda una llamada cuando mejor te venga y me comentas ;) </p>
              <a>Reservar ahora</a>
            </div>
            <div className="section">
              <h5>Email</h5>
              <p> O si lo prefieres contáctame por  correo, te contestaré en menos de 24h ;) </p>
              <a>info@enolcasielles.com</a>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        .contact {
          padding-top: 30px;
        }
        .container {
          text-align: center;
        }
        .section-title {
          color: #3a3a3a;
          margin-bottom: 34px;
        }
        .section {
          margin-top: 20px;
        }
        .section h5 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 0px;
        }
        .section p {
          font-size: 16px;
          font-weight: 300;
        }
      `}</style>
    </>
  )
}
