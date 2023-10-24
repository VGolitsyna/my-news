import icon from '../../icons/close-icon.svg'
import styles from './LoadingError.module.scss'

const LoadingError = () => {
    return <div className={styles.wrapper}>
        <img src={icon} alt="error-icon" />
        <p>Что-то пошло не так</p>
    </div>
}

export default LoadingError;