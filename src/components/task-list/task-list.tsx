import TaskCard from "../task-card";
import styles from "./task-list.module.css";

const TaskList: React.FC = () => {
  return (
    <div className={styles["task-list"]}>
      <div className={styles["task-list__header"]}>
        <div className={styles["header__status"]}></div>
        <span className={styles["header__text"]}>TODO (4)</span>
      </div>
      <div className={styles["task-list__content"]}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskList;
