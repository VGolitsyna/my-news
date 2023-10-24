import SliderCard from "./SliderCard";
import Slider from "react-slick";
import Loader from "../UI/Loader";
import LoadingError from "../UI/LoadingError";
import useGetRequest from '../../hooks/useGetRequest';
import { OpenedMenuContext } from '../../contexts/isOpenedMenu';
import { useContext, useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSection = () => {
    const [sliderNews, setSliderNews] = useState([]);
    const {isOpenedMenu} = useContext(OpenedMenuContext);
    const {loading, error, sendHttpRequest} = useGetRequest(`https://gnews.io/api/v4/top-headlines?category=world&apikey=caff4ea3f88849a0348df3f99a491fd2&lang=ru&category=nation`);

    useEffect (() => {
        const manageData = (data) => {
            const processedData = data.articles;
            setSliderNews(processedData);
        }
        sendHttpRequest(manageData);
    }, []);

    const cutText = (text, limit) => {
      text = text.split(' ').slice(0, limit).join(' ');
      return text + '...';
    }

    const items = sliderNews.map(item => {
        return <SliderCard 
        key={item.title}
        img={item.image}
        title={item.title}
        text={cutText(item.description, 12)}
        href={item.url}
        />
    })


  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  

  if (error){
    return <LoadingError />
  }

  if (loading){
    return <Loader />
  }

  return <>
    { !isOpenedMenu  && 
    <Slider {...settings}>    
      {items}
    </Slider>
  } 
  </>

};

export default SliderSection;
