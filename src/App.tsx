import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { List } from "./components/List";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask></NewTask>
          <List />
        </main>
      </div>
    </>
  );
}
