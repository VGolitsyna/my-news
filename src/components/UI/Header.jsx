import styles from './Header.module.scss'
import Menu from "../menu/Menu"
import logo from '../../icons/Logo.svg'
import Search from "../search/Search"
import { NavLink } from 'react-router-dom'

const Header = () => {
    
    return <header className={styles.header}>
        <div className={styles['header-menu']}>
            <Menu />
            <div>
            <NavLink to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
            </div>
        </div>
        <Search />
    </header>
}

export default Header