import SharesCard from "./SharesCard";
import styles from './SharesSection.module.scss';
import useGetRequest from '../../hooks/useGetRequest';
import LoadingError from "../UI/LoadingError";
import Loader from "../UI/Loader";
import { useEffect, useState } from "react";

const SharesSection = () => {
    const [sharesData, setSharesData] = useState([])

    // API предоставляет бесплатные данные только на дату 2023-01-09;
    const {loading, error, sendHttpRequest} = useGetRequest(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=Oe8nZqMTIZMk4frn47yOHHZ2SgnQPmh3`);

    useEffect (() => {
        const manageData = (data) => {
            const processedData = data.results.slice(0, 10);
            setSharesData(processedData);
        }
        sendHttpRequest(manageData);
    }, []);

    
    const items = sharesData.map(el => {
        const percent = ((Number(el.o) / Number(el.c)) * 100 - 100).toFixed(2);
        return <SharesCard key={el.T} title={el.T} cost={+el.c.toFixed(4)} percent={percent > 0 ? `+${percent}%` : `${percent}%`} />
    });

    
    if (error){
        return <LoadingError />
    }

    return <>
    {loading ? <Loader /> : <section className={styles.shares}>
        <h3>Курс акций</h3>
        {items}
    </section>}
    </>
}

export default SharesSection;