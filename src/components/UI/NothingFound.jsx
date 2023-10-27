import styles from "./NothingFound.module.scss";

const NothingFound = () => {
  return (
    <div className={styles["nothing-container"]}>
      <h3>К сожалению, по вашему запросу ничего не найдено</h3>
    </div>
  );
};

export default NothingFound;
