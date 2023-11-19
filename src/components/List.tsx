import styles from "./List.module.css";

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
    </div>
  );
}
