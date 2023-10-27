import styles from "./SharesCard.module.scss";
import { motion } from "framer-motion";

const SharesCard = ({ title, cost, percent }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles["shares-card"]}
    >
      <div className={styles["shares-card__description"]}>
        <h3>{title}</h3>
        <p>{cost}</p>
      </div>
      <p
        className={
          percent.includes("+")
            ? styles["shares-card__positive"]
            : styles["shares-card__negative"]
        }
      >
        {percent}
      </p>
    </motion.article>
  );
};

export default SharesCard;
