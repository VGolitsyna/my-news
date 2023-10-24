import {menuItems} from '../menu/menuList';
import logo from '../../icons/Logo.svg';
import { motion } from "framer-motion";
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    const list = menuItems.map(item => {
        return <motion.li 
        whileHover={{color: 'rgba(0, 0, 0, 0.87)'}} 
        key={item.path}>
            <NavLink 
            style={({isActive}) => {
                return {
                    color: isActive ? 'rgba(0, 0, 0, 0.87)' : ''
                }
                }} 
            to={`/${item.path}`}>
            {item.menuItem}
            </NavLink>
        </motion.li>
    });

    return <footer className={styles['footer-wrapper']}>
        <div className={styles['footer-nav']}>
            <ul>
                {list}
            </ul>
        </div>
        <NavLink  to={'/'}>
        <img src={logo} alt='logo' />
        </NavLink>
    </footer>
}
export default Footer;