import { length, map, pipe } from "ramda";
import {
  selectId,
  selectStatusColor,
  selectTitle,
  selectValues,
} from "../../selectors";
import TaskCard from "../task-card";
import styles from "./task-list.module.css";
import { TaskListProps } from "./task-list.types";

const DEFAULT_STATUS_COLOR = "#49c4e5";

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const color: any = selectStatusColor(data) || DEFAULT_STATUS_COLOR;

  const taskCards = pipe(
    selectValues,
    map((item) => <TaskCard key={selectId(item)} data={item} />)
  )(data);

  return (
    <div className={styles["task-list"]}>
      <div className={styles["task-list__header"]}>
        <div
          className={styles["header__status"]}
          style={{ backgroundColor: color }}
        ></div>
        <span className={styles["header__text"]}>
          {selectTitle(data)} ({pipe(selectValues, length)(data)})
        </span>
      </div>
      <div className={styles["task-list__content"]}>{taskCards}</div>
    </div>
  );
};

export default TaskList;
