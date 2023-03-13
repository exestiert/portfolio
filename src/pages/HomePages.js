import styles from "../styles/Homepage.module.css"
import { NavLink } from "react-router-dom";


const HomePage = () => {
  return (
    
    <div className={styles.background}>
     <div className={styles.backgroundOne}>
  <div className={styles.linkContainer}>
    <NavLink
      className={styles.linkOne} to="/about-me">Über Mich
      </NavLink>
  </div>
</div>
<div className={`${styles.backgroundTwo} ${styles.linkContainer}`}>
  <NavLink className={styles.linkTwo} to="/projects">Projekte</NavLink>
</div>
<div className={`${styles.backgroundThree} ${styles.linkContainer}`}>
  <NavLink className={styles.linkThree} to="/contact">Kontakt</NavLink>
</div>
      </div>
  );
};

export default HomePage;
