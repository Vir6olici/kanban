import styles from "./task-card.module.css";

const TaskCard: React.FC = () => {
  return (
    <div className={styles["card"]}>
      <span>Build UI for onboarding flow</span>
      <span>0 oif 3 subtasks</span>
    </div>
  );
};

export default TaskCard;
