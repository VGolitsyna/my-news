import { OpenedMenuContext } from "../../contexts/isOpenedMenu";
import { useContext } from "react";
import MenuBar from "./MenuBar";

const MenuBody = (props) => {
  const { isOpenedMenu } = useContext(OpenedMenuContext);
  return (
    <>
      {isOpenedMenu && <MenuBar />}
      {props.children}
    </>
  );
};

export default MenuBody;
