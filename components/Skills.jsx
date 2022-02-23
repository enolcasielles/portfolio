import React, { useState } from 'react'

const CONTENT = {
  'front-end': [
    {title: 'Lenguajes', descr: 'Javascript • Typescript • Dart • ES6 • SASS'},
    {title: 'Web', descr: 'React • Next.js • Redux'},
    {title: 'Apps', descr: 'Flutter'}
  ],
  'back-end': [
    {title: "API's", descr: 'Node • Express • Firebase'},
    {title: 'Bases de datos', descr: 'MongoDB • DynamoDB • Aurora • MySQL'},
  ],
  'other': [
    {title: 'Realidad Aumentada', descr: 'Wikitude • ARKit • ARCore • AR.js'},
    {title: 'Blockchain', descr: 'Solidity • Truffle • web3.js'},
  ],
}

export default function Skills() {

  const [selectedTab, setSelectedTab] = useState('front-end');

  let content = SkillsList(CONTENT[selectedTab]);


  return (
    <>
      <div className="skills" id="skills">
        <div className="container">
          <h1 className="section-title">
            HABILIDADES
          </h1>
          <div className="tabs">
            <div onClick={() => {setSelectedTab('front-end')}} className={'tab' + (selectedTab == 'front-end' ? ' selected' : '')}>
              <span>FRONT-END</span>
            </div>
            <div onClick={() => {setSelectedTab('back-end')}} className={'tab' + (selectedTab == 'back-end' ? ' selected' : '')}>
              <span> BACK-END </span>
            </div>
            <div onClick={() => {setSelectedTab('other')}} className={'tab' + (selectedTab == 'other' ? ' selected' : '')}>
              <span> OTROS </span>
            </div>
          </div>
          <div className="content">
            {content}
          </div>
        </div>
      </div>
      <style jsx>{`
        .skills {
          padding-top: 30px;
        }
        .container {
          text-align: center;
        }
        .section-title {
          color: #3a3a3a;
          margin-bottom: 34px;
        }
        .tabs {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tabs .tab {
          margin-left: 10px;
          margin-right: 10px;
          width: 140px;
          margin-bottom: 30px;
          font-size: 20px;
          cursor: pointer;
        }
        .tabs .tab.selected {
          color: #39B4BC
        }
        .tabs .tab.selected span {
          border-bottom: 1px solid;
        }
        .content {
          text-align: center;
          height: 200px
        }
      `}</style>
    </>
  )
}

function SkillsList(items) {

  let content = items.map((item) => {
    return (
      <div key={item.title}>
        <div className="title">{item.title}</div>
        <div className='descr'>{item.descr}</div>
        <style jsx>{`
          .title {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .descr {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    );
  });

  return (
    <div>
      {content}
    </div>
  );
}
