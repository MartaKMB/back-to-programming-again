// 3. PROJECT: TODO
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addBtnElement: HTMLButtonElement = document.querySelector('#button3');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLElement = document.querySelector('.categories');

type Category = 'general' | 'work' | 'gym' | 'hobby';

let selectedCategory: Category;

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

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

const render = () => {
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

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement('li');
    
    const radioInputElement: HTMLInputElement = document.createElement('input');
    radioInputElement.type = 'radio';
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener('change', () => selectedCategory = category);

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.setAttribute('for', `category-${category}`);
    labelElement.innerHTML = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addBtnElement.addEventListener('click', (event: Event) => {
  // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
  // const selectedCategory: Category = selectedRadioElement.value as Category;
  
  event.preventDefault();
  addTask({
    name: taskNameInputElement.value,
    done: false,
    category: selectedCategory,
  });
  render();
});

addTask({ name: 'Zrobić klatę', category: 'gym', done: false });

renderCategories();
render();
