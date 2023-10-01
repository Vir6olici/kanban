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

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e) => {
    const draggedId = e.dataTransfer.getData("text");
    // call la be pentru adaugat element in coloana respectiva
  };

  return (
    <div
      className={styles["task-list"]}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
    >
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
