import menuBar from "../../icons/menu-icon.svg";
import close from "../../icons/close-icon.svg";

import { useContext } from "react";
import { OpenedMenuContext } from "../../contexts/isOpenedMenu";
import { motion } from "framer-motion";

const Menu = () => {
  const { isOpenedMenu, setIsOpenedMenu } = useContext(OpenedMenuContext);

  const openMenuHeader = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };

  return (
    <nav>
      <motion.button
        whileTap={{ rotate: 360 }}
        transition={{ type: "tween" }}
        onClick={openMenuHeader}
      >
        {isOpenedMenu ? (
          <img src={close} alt="menu-close" />
        ) : (
          <img src={menuBar} alt="menu-bar" />
        )}
      </motion.button>
    </nav>
  );
};

export default Menu;
