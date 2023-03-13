import React from "react";
import styles from "../styles/Projects.module.css";
import Navigation from "./Navigation";
import bilderGalerie from "../img/Bilder-Galerie.png";
import pokemon from "../img/Pokemon.png";
import schachspiel from "../img/Schachspiel.png";
import platzhalter from "../img/Platzhalter.svg";

export default function Projects() {
  return (
    <div className={styles.background}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.imgCard}>
          <div className={styles.img}>
            <a href="https://ui-basic-bildergalerie.vercel.app/">
              <img
                className={styles.imgSize}
                src={bilderGalerie}
                alt="Bilder Galerie"
              />
            </a>
          </div>
          <h2 className={styles.titel}>Bildergalerie</h2>
          <p> Details: HTML, Sass, Bootstrap</p>
          <a
            className={styles.code}
            href="https://github.com/exestiert/Ui-Basic-Bildergalerie"
          >
            Klicke hier für den Code
          </a>
        </div>
        <div className={styles.imgCard}>
          <div className={styles.img}>
            <a href="https://pokemon-app-exestiert.vercel.app/">
              <img className={styles.imgSize} src={pokemon} alt="Pokemon API" />
            </a>
          </div>
          <h2 className={styles.titel}>Pokémon Datenbank</h2>
          <p> Details: React, kostenlose API</p>
          <a
            className={styles.code}
            href="https://github.com/exestiert/pokemon-app"
          >
            Klicke hier für den Code
          </a>
        </div>
        <div className={styles.imgCard}>
          <div className={styles.img}>
            <a href="https://exestiert.github.io/chess-game/">
              <img
                className={styles.imgSize}
                src={schachspiel}
                alt="Schachspiel"
              />
            </a>
          </div>
          <h2 className={styles.titel}>Schachspiel</h2>
          <p> Details: React, enthält Sounds, nur für Desktop Ansicht</p>
          <a
            className={styles.code}
            href="https://github.com/exestiert/chess-game"
          >
            Klicke hier für den Code
          </a>
        </div>
        <div className={styles.imgCard}>
          <div className={styles.img}>
            <a href="/projects">
              <img
                className={styles.imgSize}
                src={platzhalter}
                alt="Platzhalter"
              />
            </a>
          </div>
          <h2 className={styles.titel}>Titel</h2>
          <p> Details:</p>
          <a className={styles.code} href="/projects">
            Klicke hier für den Code
          </a>
        </div>
        <div className={styles.imgCard}>
          <div className={styles.img}></div>
          <a href="/projects">
            <img
              className={styles.imgSize}
              src={platzhalter}
              alt="Platzhalter"
            />
          </a>
          <h2 className={styles.titel}>Titel</h2>
          <p> Details:</p>
          <a className={styles.code} href="/projects">
            Klicke hier für den Code
          </a>
        </div>
        <div className={styles.imgCard}>
          <div className={styles.img}>
            <a href="/projects">
              <img
                className={styles.imgSize}
                src={platzhalter}
                alt="Platzhalter"
              />
            </a>
          </div>
          <h2 className={styles.titel}>Titel</h2>
          <p> Details:</p>
          <a className={styles.code} href="/projects">
            Klicke hier für den Code
          </a>
        </div>
      </div>
    </div>
  );
}
