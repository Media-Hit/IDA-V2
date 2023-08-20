import React from 'react';

function MainMenu() {
  return (
  <>
    <div className="sidebar">
      <div className="sidebar__logoContainer">
        <img className="sidebar__logo" src={ require('../../assets/logo-media-hit-white.png') } alt={"Media Hit"} />
      </div>
    </div>

    <nav className='sidebar__itemsNav'>
      <ul className='sidebar__itemsContainer'>
        <li className="sidebar__category">Financiero</li>
              
          <a class="sidebar_item" href="https://google.com" >
              <span class="sidebar__iconSpan">
              <i>
                  <img className="sidebar__itemIcon" src={ require('../../assets/menu-icons/i-today.png') } />
              </i>
              </span>
              <span class="sidebar__itemText">Movimientos</span>
          </a>
      </ul>
    </nav>
  </> 
  )}

export { MainMenu }