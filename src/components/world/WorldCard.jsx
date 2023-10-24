import { motion } from "framer-motion";
import styles from './WorldCard.module.scss';

const WorldCard = ({description, title, img, href}) => {

    return <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} 
    className={styles['world-card__wrapper']}
    href={href}
    target="_blank">
    <div className={styles['world-card']}>
        <p className={styles['world-card__descrp']}>{description}</p>
        <h3>{title}</h3>
    </div>
    <img src={img} aria-hidden alt="news-image" />
</motion.a>

}

export default WorldCard;