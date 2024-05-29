import { TaskClass } from './classes/task.js';
import { render as renderCategories } from './helpers/render-categories-helper.js';
import renderTasks from './helpers/render-task-helper.js';
import { Category, Task } from './types/types.js';

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addBtnElement: HTMLButtonElement = document.querySelector('#button3');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement =
  document.querySelector('.categories');

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.GYM,
  Category.HOBBY,
  Category.SOCIAL,
  Category.WORK,
];

const tasks: Task[] = [
  new Task('Wyrzucić śmieci', false),
  new Task('Pójść na siłkę', true, Category.GYM),
  new Task('Nakramić koty', false, Category.HOBBY),
  // {
  //   name: 'Wyrzucić śmieci',
  //   done: false,
  // },
  // {
  //   name: 'Pójść na siłkę',
  //   done: true,
  //   category: Category.GYM,
  // },
  // {
  //   name: 'Nakarmić koty',
  //   done: false,
  // },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) =>
  (selectedCategory = newCategory);

addBtnElement.addEventListener('click', (event: Event) => {
  // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
  // const selectedCategory: Category = selectedRadioElement.value as Category;

  event.preventDefault();
  // addTask({
  //   name: taskNameInputElement.value,
  //   done: false,
  //   category: selectedCategory,
  // });
  const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
  addTask(newTask);
  // newTask.logCreationDate();
  renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ['Nauka TS', Category.WORK, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

// addTask({ name: taskName, category: taskCategory, done: taskDoneStatus});
addTask(new Task(taskName, taskDoneStatus, taskCategory));

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass('Umówić się na boks', false);
// console.log(taskClassInstance);
taskClassInstance.logCreationDate();
