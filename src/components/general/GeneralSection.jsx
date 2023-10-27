import styles from "./GeneralSection.module.scss";
import GeneralCard from "./GeneralCard";
import useGetRequest from "../../hooks/useGetRequest";
import LoadingError from "../UI/LoadingError";
import Loader from "../UI/Loader";
import { useState, useEffect } from "react";

const GeneralSection = ({ category, number, clName }) => {
  const [generalNews, setGeneralNews] = useState([]);

  const { loading, error, sendHttpRequest } = useGetRequest(
    `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=caff4ea3f88849a0348df3f99a491fd2&lang=ru&max=${number}`
  );

  useEffect (() => {
      const manageData = (data) => {
          const processedData = data.articles;
          setGeneralNews(processedData);
      }
      sendHttpRequest(manageData);
  }, [category]);

  const items = generalNews.map(item => {
      return <GeneralCard
      key={item.title}
      description={item.publishedAt.slice(11, 16)}
      title={item.title}
      text={item.description}
      img={item.image}
      href={item.url}
      />
  })

  if (error) {
    return <LoadingError />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles[clName]}>
          {items}
        </section>
      )}
    </>
  );
};

export default GeneralSection;
