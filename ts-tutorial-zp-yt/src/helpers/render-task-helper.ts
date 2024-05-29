import { Task } from "../types/types";

const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskElement: HTMLElement = document.createElement('li');
      task.category && taskElement.classList.add(task.category);
      const id: string = `task-${index}`;
      const labelElement: HTMLLabelElement = document.createElement('label');
      const checkboxElement: HTMLInputElement = document.createElement('input');
  
      labelElement.innerText = task.name;
      labelElement.setAttribute('for', id);
  
      checkboxElement.type = 'checkbox';
      checkboxElement.name = task.name;
      checkboxElement.id = id;
      checkboxElement.checked = task.done;
      checkboxElement.addEventListener('change', () => {
        task.done = !task.done;
      });
  
      taskElement.appendChild(labelElement);
      taskElement.appendChild(checkboxElement);
  
      tasksContainerElement.appendChild(taskElement);
    });
  };

  export default render;