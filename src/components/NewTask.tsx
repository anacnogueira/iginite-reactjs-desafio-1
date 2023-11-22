import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewTask.module.css";
interface NewTaskProps {
  onCreateTask: (task: TaskType) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [titleTask, setTitleTask] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTitleTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask({
      id: uuidv4(),
      title: titleTask,
      isComplete: false,
    });
    setTitleTask("");
  }

  return (
    <div className={styles.newTask}>
      <form onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={titleTask}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar <PlusCircle weight="bold" />
        </button>
      </form>
    </div>
  );
}
