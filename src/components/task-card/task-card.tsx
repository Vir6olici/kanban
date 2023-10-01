import { filter, pipe, propEq, length, not } from "ramda";
import { selectSubTasks, selectTitle } from "../../selectors";
import styles from "./task-card.module.css";
import { TaskCardProps } from "./task-card.types";

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  console.log(data);
  const subTasksPending = pipe(
    selectSubTasks,
    filter(pipe(propEq(true, "done"), not)),
    length
  )(data);

  const subTasksLength = pipe(selectSubTasks, length)(data);

  return (
    <div className={styles["card"]}>
      <span>{selectTitle(data)}</span>
      <span>{`${subTasksPending} of ${subTasksLength} subtasks`}</span>
    </div>
  );
};

export default TaskCard;
