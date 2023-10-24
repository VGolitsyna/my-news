import styles from './SliderCard.module.scss';
import {useState} from 'react';
import { motion } from "framer-motion";

const SliderCard = ({img, title, text, href}) => {
    const [onHover, setOnHover] = useState(false);

    return <motion.a 
    href={href} 
    target="_blank"
    whileHover={
        { scale: 1.2 }
    }
    onHoverStart={e => {setOnHover(true)}}
    onHoverEnd={e => {setOnHover(false)}}
    >
    <div
    className={styles['card-wrapper']}>
    <div className={styles['card-content']}>
        <img src={img} aria-hidden alt='slider-image'/>
        <div className={styles['card-information']}> 
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
    <p className={onHover ? styles['card-link'] : styles.none}>Перейти к источнику</p>
    </div>
    </motion.a>
}

export default SliderCard;