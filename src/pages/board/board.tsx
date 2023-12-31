import { map, pipe } from "ramda";
import TaskList from "../../components/task-list";
import { selectId, selectTasks } from "../../selectors";
import styles from "./board.module.css";
import { BoardProps } from "./board.types";
import AddTaskList from "../../components/placeholder-card";

const Board: React.FC<BoardProps> = ({ data }) => {
  const taskList = pipe(
    selectTasks,
    map((tasks) => <TaskList key={selectId(tasks)} data={tasks} />)
  )(data);

  return (
    <div className={styles["board"]}>
      {taskList}
      <AddTaskList text={"+ New Column"} />
    </div>
  );
};

export default Board;
