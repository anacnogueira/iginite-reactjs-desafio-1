import { Task, TaskType } from "./Task";
import { EmptyList } from "./EmptyList";
import styles from "./List.module.css";

interface InfoTasksType {
  createdTasks: number;
  completedTasks: number;
}

interface ListProps {
  tasks: TaskType[];
  infoTasks: InfoTasksType;
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function List({
  tasks,
  infoTasks,
  onCompleteTask,
  onDeleteTask,
}: ListProps) {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.infoTasks}>
          <strong>Tarefas criadas</strong>
          <span>{infoTasks.createdTasks}</span>
        </div>
        <div className={styles.infoTasks}>
          <strong>Concluídas</strong>
          <span>
            {infoTasks.completedTasks} de {infoTasks.createdTasks}
          </span>
        </div>
      </header>
      <div className={styles.tasks}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onCompleteTask={onCompleteTask}
              onDeleteTask={onDeleteTask}
            />
          );
        })}

        {tasks.length === 0 && <EmptyList />}
      </div>
    </div>
  );
}
