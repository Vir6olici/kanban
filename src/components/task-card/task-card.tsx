import { filter, pipe, propEq, length, not } from "ramda";
import { selectId, selectSubTasks, selectTitle } from "../../selectors";
import styles from "./task-card.module.css";
import { TaskCardProps } from "./task-card.types";

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  const subTasksPending: any = pipe(
    selectSubTasks,
    filter(pipe(propEq(true, "done"), not))
  )(data);

  const subTasksLength = pipe(selectSubTasks, length)(data);

  const onDragStartHandler = (e) => {
    e.dataTransfer.setData("text/plain", selectId(data));
  };

  return (
    <div className={styles["card"]} draggable onDragStart={onDragStartHandler}>
      <span className={styles["card__title"]}>{selectTitle(data)}</span>
      <span className={styles["card__subtitle"]}>{`${length(
        subTasksPending
      )} of ${subTasksLength} subtasks`}</span>
    </div>
  );
};

export default TaskCard;
