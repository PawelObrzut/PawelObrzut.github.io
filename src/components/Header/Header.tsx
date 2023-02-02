import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header header--grid__container">
        <section className="header--title">
          <h1 className="header--title__name">🅿🅰🆆🅴🅻<br></br>🅾🅱🆁🆉🆄🆃</h1>
        </section>

        <section className="header--links">
          <ul className="header--links__list">
            <Link to='/'><li>projects</li></Link>
            <Link to='aboutme'><li>about me</li></Link>
            <Link to='contact'><li>contact</li></Link>
          </ul>
        </section>
      </header>
    </>
  )
}

export default Header