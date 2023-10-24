import styles from './GeneralCard.module.scss';
import { motion } from "framer-motion";


const GeneralCard = ({description, title, text, img, href}) => {

    return <motion.a 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        className={styles['general-card__wrapper']}
        href={href}
        target="_blank">
        <div className={styles['general-card']}>
                <p className={styles['general-card__descrp']}>{description}</p>
                <h3>{title}</h3>
                <p>{text}</p>
        </div>
            <img src={img} aria-hidden alt="news-image" />
    </motion.a>
}

export default GeneralCard;