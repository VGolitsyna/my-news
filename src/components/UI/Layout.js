import style from "./Layout.module.scss";

import { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { OpenedMenuContext } from "../../contexts/isOpenedMenu";
import { SearchQuery } from "../../contexts/searchQuery";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  const [isSearchQuery, setIsSearchQuery] = useState("");

  return (
    <>
      <OpenedMenuContext.Provider value={{ isOpenedMenu, setIsOpenedMenu }}>
        <SearchQuery.Provider value={{ isSearchQuery, setIsSearchQuery }}>
          <Header />
          <main className={style["main-container"]}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </SearchQuery.Provider>
      </OpenedMenuContext.Provider>
      <Footer />
    </>
  );
};

export default Layout;
