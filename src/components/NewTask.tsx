import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <form>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button type="submit">
          Criar <PlusCircle weight="bold" />
        </button>
      </form>
    </div>
  );
}
