import styles from "../styles/Contact.module.css";
import "../styles/icons.css"
import Navigation from "./Navigation";

const Contact = () => {
  return (
    <div className={styles.background}>
      <Navigation />
      <div className={styles.container}>
        <h1>Kontakt</h1>
        <p>
          Steffen Lemke
          <br />
          Driverstraße 7<br />
          49377 Vechta
        </p>
        <a href="tel:+4915224321692">0152 24321692</a>
        <a href="mailto:steffenlemke1@gmx.de">steffenlemke1@gmx.de</a>
        <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/steffen-lemke-b27825224/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/exestiert"><i className="fa-brands fa-github"></i></a>          
        </div>
      </div>
    </div>
  );
};

export default Contact;
