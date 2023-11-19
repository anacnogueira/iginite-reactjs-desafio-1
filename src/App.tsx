import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask></NewTask>
          <br />
          Tasks
        </main>
      </div>
    </>
  );
}
