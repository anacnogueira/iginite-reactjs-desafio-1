import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button type="button" className={styles.buttonCheck}>
        <Circle />
      </button>
      <p className={styles.contentCheck}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        impedit quas laudantium neque exercitationem reprehenderit beatae nihil
        dignissimos quos saepe maxime omnis adipisci repellat debitis enim
        dolore delectus, ipsam illo.
      </p>
      <button className={styles.buttonTrash}>
        <Trash />
      </button>
    </div>
  );
}
