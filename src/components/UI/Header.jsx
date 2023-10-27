import styles from "./Header.module.scss";
import logo from "../../icons/Logo.svg";
import miniLogo from "../../icons/m-logo.svg";
import Menu from "../menu/Menu";
import Search from "../search/Search";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-menu"]}>
        <Menu />
        <NavLink to="/">
          <img hidden src={logo} alt="logo" />
          <img
            hidden
            className={styles["mini-logo"]}
            src={miniLogo}
            alt="logo"
          />
        </NavLink>
      </div>
      <Search />
    </header>
  );
};

export default Header;
