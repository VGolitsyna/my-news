import styles from './Loader.module.scss';
import { motion } from "framer-motion"

const Loader = () => {

    return <div className={styles['loader-wrapper']}>
        <motion.div 
        animate={{ rotate: 360 }} 
        transition={{repeat: Infinity, duration: 2,  type: 'spring'}} 
        id='loader' 
        className={styles['loader-circle']}/>
    </div>

}

export default Loader;