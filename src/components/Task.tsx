import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onCompleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(task.id);
  }
  return (
    <div className={styles.task}>
      <button
        type="button"
        className={task.isComplete ? styles.buttonChecked : styles.buttonCheck}
        onClick={handleCompleteTask}
      >
        {task.isComplete ? <CheckCircle weight="fill" /> : <Circle />}
      </button>
      <p
        className={
          task.isComplete ? styles.titleFinished : styles.titleNotFinished
        }
      >
        {task.title}
      </p>
      <button className={styles.buttonTrash}>
        <Trash />
      </button>
    </div>
  );
}
