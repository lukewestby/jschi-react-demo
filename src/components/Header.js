import React, { Component } from 'react';
import StyleSheet from 'stilr';

const styles = StyleSheet.create({
  header: {
    position: 'fixed',
    width: '100%',
    height: '60px',
    backgroundColor: 'white',
    borderBottom: '1px solid #4fc094'
  },
  container: {
    maxWidth: "768px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  logo: {
    fontSize: "2em",
    margin: "0",
    marginTop: "-4px",
    lineHeight: "1",
    fontWeight: "normal"
  },
  jsChiLogo: {
    fontFamily: "Bree Serif",
    marginRight: "8px",
    fontWeight: "bold"
  }
});

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
