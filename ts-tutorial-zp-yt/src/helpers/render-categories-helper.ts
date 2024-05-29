import { Category } from '../types/types';

const handleCategoryChange = (category: Category) => {
  if (category === 'general') {
    console.log('to general');
  } else if (category === 'gym') {
    console.log('czas na siłkę!');
  } else if (category === 'hobby') {
    console.log('to hobby');
  } else if (category === 'work') {
    console.log('to work');
  } else if (category === 'social') {
    console.log('to jest social');
  } else {
    const never: never = category
    console.log(never);
  }
};

export const render = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement('li');

    const radioInputElement: HTMLInputElement = document.createElement('input');
    radioInputElement.type = 'radio';
    radioInputElement.name = 'category';
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener('change', () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement('label');
    labelElement.setAttribute('for', `category-${category}`);
    labelElement.innerHTML = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
