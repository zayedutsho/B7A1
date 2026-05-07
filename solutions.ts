// Problem 1:

const filterEvenNumbers = (arr: number[]): number[] => {
  const filter = arr.filter((num) => num % 2 === 0);
  return filter;
};

const arr: number[] = [1, 2, 3, 4, 5, 6];
filterEvenNumbers(arr);

// Problem 2:

const reverseString = (str: string): string => {
  const result = str.split("").reverse().join("");
  return result;
};

const reverse = reverseString("typescript");

// Problem 3:

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  return typeof value === "string" ? "String" : "Number";
};
checkType(28);

// Problem 4:

function getProperty<T, K extends keyof T>(obj: T, key: k): T[k] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Problem 5:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const updatedBook = toggleReadStatus(myBook);

// Problem 6:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name ${this.name} ,Age ${this.age} , Grade ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem 7:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const result = arr1.filter((num) => arr2.includes(num));
  return result;
};

const finalArray = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
