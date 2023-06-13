import styles from "../styles/AboutMe.module.css";
import Navigation from "./Navigation";
const AboutUs = () => {
  function getAge(oDate) {
    let diff_ms = Date.now() - oDate.getTime();
    let age_ms = new Date(diff_ms);
    let age_years = age_ms.getUTCFullYear() - 1970;
    return age_years < 0 ? NaN : age_years;
  }
  
  let oBirthDay = new Date(1997, 1, 10);
  return (
    <div className={styles.background}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.img}></div>
        <h1>Steffen Lemke</h1>
        <h3> Frontend Entwickler</h3>
        <p>
          Hi, ich bin Steffen Lemke {getAge(oBirthDay)}, ein Web Entwickler auf der Suche nach einer neuen Herausforderung. Da ich zuvor eine Ausbildung zum
          Gestaltungstechnischen Assistenten absolvierte, habe ich mich für die
          Weiterbildung als Webentwickler entschieden um die gestalterischen
          Fähigkeiten mit der Programierung zu kombinieren. <br />
          <br />
          Durch meine Weiterbildung bei Digitial Career Institute beherrsche ich verschiedene Programmiersprachen wie HTML, CSS, JavaScript und das dazugehörige React Framework. Ich konnte diese Fähigkeiten im Final Projekt erfolgreich einsetzten, wo ich maßgeblich an der Entwicklung des Frontend beteiligt war. Das Final Projekt war eine Gruppenarbeit aus 4 Person und beinhaltet ein Wiki zu Dungeons & Dragons. Der User hat die Möglichkeit einen Account anzulegen, Profilbild und Passwort zu aktualisieren, durch Input Felder  Informationen aus unserer Datenbank zu filtern und Inhalte als Favoriten im Dashboard zu speichern.  <br />
          <br />
          Ich bin ein kommunikativer, hilfsbereiter und zuverlässiger Mensch und
          bin immer bereit, meine Fähigkeiten zu erweitern und mich an neuen
          Herausforderungen zu versuchen. Durch meine ehrenamtliche Arbeit in
          einer queeren Bewegung junger Mensch bin ich dazu in der Lage sowohl
          mit kleinen als auch mit größeren Gruppen an einem Projekt zu
          arbeiten. <br />
          <br />
          Habe ich Ihr Interesse geweckt? <br />
          Dann kontaktieren Sie mich doch gerne über{" "}
          <a href="mailto:steffenlemke1@gmx.de">Email</a> oder über meine{" "}
          <a href="tel:+4915224321692">Handynummer</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
