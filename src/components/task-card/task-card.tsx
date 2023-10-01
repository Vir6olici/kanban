import { filter, pipe, propEq, length, not } from "ramda";
import { selectSubTasks, selectTitle } from "../../selectors";
import styles from "./task-card.module.css";
import { TaskCardProps } from "./task-card.types";

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  console.log(data);
  const subTasksPending: any = pipe(
    selectSubTasks,
    filter(pipe(propEq(true, "done"), not))
  )(data);

  const subTasksLength = pipe(selectSubTasks, length)(data);

  return (
    <div className={styles["card"]}>
      <span className={styles["card__title"]}>{selectTitle(data)}</span>
      <span className={styles["card__subtitle"]}>{`${length(
        subTasksPending
      )} of ${subTasksLength} subtasks`}</span>
    </div>
  );
};

export default TaskCard;
