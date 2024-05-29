// export interface Task {
//   name: string;
//   done: boolean;
//   category?: Category;
// }

export enum Category {
  GENERAL = 'general',
  WORK = 'work',
  GYM = 'gym',
  HOBBY = 'hobby',
  SOCIAL = 'social',
}

export class Task {
  name: string = 'Nowe zadanie';
  done: boolean;
  category?: Category;
  private createdAt: Date;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
  }

  logCreationDate(extra: string = '!') {
    console.log(`Task został stworzony: ${this.createdAt}${extra}`);
  }
}
