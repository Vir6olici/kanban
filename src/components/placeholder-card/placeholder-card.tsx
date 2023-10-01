import { PlaceholderCardProps } from "./placeholder-card.types";
import styles from "./placeholder-card.module.css";

const PlaceholderCard: React.FC<PlaceholderCardProps> = ({ text }) => {
  return (
    <div className={styles["placeholder-card"]}>
      <span className={styles["card__text"]}>{text}</span>
    </div>
  );
};

export default PlaceholderCard;
