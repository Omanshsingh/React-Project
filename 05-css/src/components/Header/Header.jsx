import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.header}>
      <h1 className={Styles.title}>My Header</h1>
      <button className={Styles.button}>Click Me</button>
    </div>
  )
}

export default Header
