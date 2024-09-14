import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" exact activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName={styles.active}>
        Movies
      </NavLink>
    </nav>
  );
}
