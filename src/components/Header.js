import React, { Component } from 'react';

import styles from '../styles/Header.css';

export class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <span className={styles.jsChiLogo}>js.chi()</span>
            <span>React Demo</span>
          </h1>
        </div>
      </header>
    );
  }
}
