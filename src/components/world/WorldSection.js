import styles from "./WorldSection.module.scss";
import WorldCard from "./WorldCard";
import LoadingError from "../UI/LoadingError";
import Loader from "../UI/Loader";
import useGetRequest from "../../hooks/useGetRequest";
import { useState, useEffect } from "react";

const WorldSection = () => {
  const [worldNews, setWorldNews] = useState([]);

  const { loading, error, sendHttpRequest } = useGetRequest(
    `https://gnews.io/api/v4/top-headlines?category=world&apikey=caff4ea3f88849a0348df3f99a491fd2&lang=ru&max=6`
  );

  useEffect(() => {
    const manageData = (data) => {
      const processedData = data.articles;
      setWorldNews(processedData);
    };
    sendHttpRequest(manageData);
  }, []);

  const items = worldNews.map((item) => {
    return (
      <WorldCard
        key={item.title}
        description={item.publishedAt.slice(11, 16)}
        title={item.title}
        img={item.image}
        href={item.url}
      />
    );
  });

  if (error) {
    return <LoadingError />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles["general-section__world"]}>{items}</section>
      )}
    </>
  );
};

export default WorldSection;
