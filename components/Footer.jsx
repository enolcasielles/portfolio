import React from 'react'
import { AccessAlarm, GitHub, LinkedIn, Mail, ThreeDRotation, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <a href="https://twitter.com/enolcasielles">
            <Twitter fontSize='large' htmlColor='#fff'/>
          </a>
          <a href="https://www.linkedin.com/in/enol-casielles-martinez-2a848864/">
            <LinkedIn fontSize='large' htmlColor='#fff'/>
          </a>
          <a href="https://github.com/enolcasielles">
            <GitHub fontSize='large' htmlColor='#fff'/>
          </a>
          <a href="mailto:enolcasielles@gmail.com">
            <Mail fontSize='large' htmlColor='#fff'/>
          </a>
        </div>
      </div>
      <style>{`
        .footer {
          margin-top: 20px;
          padding: 60px;
          background-color: #2a2a2a;
        }
        .container a {
          margin: 10px;
        }
      `}</style>
    </>
  )
}
