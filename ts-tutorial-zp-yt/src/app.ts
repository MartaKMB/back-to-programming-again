import { render as renderCategories } from "./helpers/render-categories-helper.js";
import renderTasks from "./helpers/render-task-helper.js";
import { Category, Task } from "./types/types";

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addBtnElement: HTMLButtonElement = document.querySelector('#button3');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement = document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
  {
    name: 'Wyrzucić śmieci',
    done: false,
  },
  {
    name: 'Pójść na siłkę',
    done: true,
    category: 'gym',
  },
  {
    name: 'Nakarmić koty',
    done: false,
  },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => selectedCategory = newCategory;

addBtnElement.addEventListener('click', (event: Event) => {
  // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
  // const selectedCategory: Category = selectedRadioElement.value as Category;
  
  event.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);
});

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
