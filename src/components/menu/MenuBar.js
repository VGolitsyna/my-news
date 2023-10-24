import styles from './MenuBar.module.scss';
import { motion } from "framer-motion";
import { menuItems } from './menuList';
import { OpenedMenuContext } from '../../contexts/isOpenedMenu';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

const MenuBar = () => {
    const {isOpenedMenu, setIsOpenedMenu} = useContext(OpenedMenuContext);

    const closeMenuHandler = () => {
        setIsOpenedMenu(!isOpenedMenu);
    }

    const list = menuItems.map(item => {
        return <motion.li 
        whileHover={{color: 'rgba(0, 0, 0, 0.87)'}} 
        key={item.path}
        onClick={closeMenuHandler}>
            <NavLink 
            style={({isActive}) => {
                return {
                    color: isActive ? 'rgba(0, 0, 0, 0.87)' : '',
                }
                }} 
            to={`/${item.path}`}>
            {item.menuItem}
            </NavLink>
        </motion.li>
    })

    return <div className={styles['menu-wrapper']}>
    <div className={styles.menu}>
        <ul className={styles['menu-content']}>
            {list}
        </ul>
    </div>
</div>
}

export default MenuBar;