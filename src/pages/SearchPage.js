import styles from "./SearchPage.module.scss";
import { useEffect, useContext, useState } from "react";
import { SearchQuery } from "../contexts/searchQuery";
import MenuBody from "../components/menu/MenuBody";
import GeneralCard from "../components/general/GeneralCard";
import useGetRequest from "../hooks/useGetRequest";
import Loader from "../components/UI/Loader";
import LoadingError from "../components/UI/LoadingError";
import NothingFound from "../components/UI/NothingFound";

const SearchPage = () => {
  const { isSearchQuery } = useContext(SearchQuery);

  const [searchItems, setSearchItems] = useState([]);

  const { loading, error, sendHttpRequest } = useGetRequest(
    `https://gnews.io/api/v4/top-headlines?q=${isSearchQuery}&apikey=caff4ea3f88849a0348df3f99a491fd2&lang=ru`
  );

  useEffect(() => {
    const manageData = (data) => {
      const processedData = data.articles;
      setSearchItems(processedData);
    };
    sendHttpRequest(manageData);
  }, [isSearchQuery]);

  const items = searchItems.map((item) => {
    return (
      <GeneralCard
        key={item.title}
        description={item.publishedAt.slice(11, 16)}
        title={item.title}
        text={item.description}
        img={item.image}
      />
    );
  });

  const nothingFoundItem = searchItems.length === 0 && !error;

  return (
    <>
      <MenuBody>
        <h1>Поиск</h1>
        {error && <LoadingError />}
        {nothingFoundItem && <NothingFound />}
        {loading ? (
          <Loader />
        ) : (
          <section className={styles["content-container"]}>{items}</section>
        )}
      </MenuBody>
    </>
  );
};

export default SearchPage;
