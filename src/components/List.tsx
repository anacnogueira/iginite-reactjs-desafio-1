import { EmptyList } from "./EmptyList";
import styles from "./List.module.css";
import { Task } from "./Task";

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
        <EmptyList />
        {/* <Task /> */}
      </div>
    </div>
  );
}
