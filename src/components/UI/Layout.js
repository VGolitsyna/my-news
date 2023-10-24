import style from './Layout.module.scss';
import { useState } from 'react';
import { OpenedMenuContext } from '../../contexts/isOpenedMenu';
import { SearchQuery } from '../../contexts/searchQuery';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {

    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const [isSearchQuery, setIsSearchQuery] = useState('');


    return <>
    <OpenedMenuContext.Provider value={{isOpenedMenu, setIsOpenedMenu}}>
    <SearchQuery.Provider value={{isSearchQuery, setIsSearchQuery}}>
    <Header />
    <main className={style['main-conteiner']}>
        <Outlet />
    </main>
    </SearchQuery.Provider>
    </OpenedMenuContext.Provider> 
    <Footer />
</>
}

export default Layout;