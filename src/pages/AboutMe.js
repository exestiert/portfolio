import styles from "../styles/AboutMe.module.css";
import Navigation from "./Navigation";
const AboutUs = () => {
  return (
    <div className={styles.background}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.img}></div>
        <h1>Steffen Lemke</h1>
        <h3> Frontend Entwickler</h3>
        <p>
          Hi, ich bin Steffen Lemke (26), ein angehender Web Entwickler. Zurzeit
          mache ich eine Weiterbildung als Fullstack Webentwickler bei Digital
          Career Institute. Da ich zuvor eine Ausbildung zum
          Gestaltungstechnischen Assistenten absolvierte, habe ich mich für die
          Weiterbildung als Webentwickler entschieden um die gestalterischen
          Fähigkeiten mit der Programierung zu kombinieren. <br />
          <br />
          Durch meine Weiterbildung bei DIgitial Career Institute beherrsche ich
          verschiedene Programmiersprachen wie HTML, CSS, JavaScript und React.
          Ich konnte diese Fähigkeiten bei verschiedenen Projekten erfolgreich
          eingesetzt, wo ich maßgeblich an der Entwicklung des Frontend
          beteiligt war und die Umsetzung der Designs gewährleistet habe. <br />
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
