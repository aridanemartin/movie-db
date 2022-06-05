import "./NavBar.scss";
import aridaneMartin from "../../assets/img/aridaneLogo.webp";
import { FormControlLabel, Switch } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider/DarkModeProvider";
import sun from "../../assets/img/sun.webp";
import moon from "../../assets/img/moon.webp";

export const NavBar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  const switchHandler = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? "navWrapper navWrapper-dark" : "navWrapper"}>
      <div
        className={
          darkMode
            ? "navWrapper__logo navWrapper__logo-dark"
            : "navWrapper__logo"
        }
      >
        <img src={aridaneMartin} alt="Aridane Martín - Logo" />
      </div>
      <div className="navWrapper__themeSelector">
        <img src={darkMode ? sun : moon} alt={darkMode ? "sun" : "moon"} />
        <FormControlLabel
          control={<Switch size="medium" color="default" />}
          onChange={switchHandler}
        />
      </div>
    </nav>
  );
};
