import { useState } from "react";
import { Header } from "./components/Header";
import { TaskType } from "./components/Task";
import { NewTask } from "./components/NewTask";
import { List } from "./components/List";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const completedTasks = tasks.filter((task) => task.isComplete == true).length;

  const infoTasks = {
    createdTasks: tasks.length,
    completedTasks,
  };

  function createTask(NewTask: TaskType) {
    setTasks([...tasks, NewTask]);
  }

  function completeTask(taskId: string) {
    const TasksWithoutCompletedOne = tasks.map((task) => {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });
    setTasks(TasksWithoutCompletedOne);
  }

  function deleteTask(taskId: string) {
    const TasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(TasksWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={createTask}></NewTask>
          <List
            tasks={tasks}
            infoTasks={infoTasks}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        </main>
      </div>
    </>
  );
}
