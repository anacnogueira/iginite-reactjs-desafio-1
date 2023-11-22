import { EmptyList } from "./EmptyList";
import { v4 as uuidv4 } from "uuid";
import styles from "./List.module.css";
import { Task } from "./Task";

const tasks = [
  {
    id: uuidv4(),
    title: "Comprar leite",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar inglês",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Fazer roteiro do vídeo",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Estudar typescript",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "Terminar Desafio de React do Ignite",
    isComplete: true,
  },
];

//setTasks

export function List() {
  return (
    <div className={styles.list}>
      <header>
        <div className={styles.infoTasks}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.infoTasks}>
          <strong>Concluídas</strong>
          <span>1 de 5</span>
        </div>
      </header>
      <div className={styles.tasks}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}

        {tasks.length === 0 && <EmptyList />}
      </div>
    </div>
  );
}
