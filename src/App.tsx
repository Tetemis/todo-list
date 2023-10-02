import { Task } from './components/Tarefas';
import {TaskForm} from './components/TarefasForm'
import {useState} from 'react'
export function App() {
  return (
    <div>
      <h1>Andressa's ToDo-List</h1>
      <TaskForm/>
    </div>
  );
}
