type AccessorType<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
} & {
  [P in keyof T as `set${Capitalize<string & P>}`]: (value: T[P]) => void;
};


interface User {
  name: string;
  age: number;
}


type UserWithAccessors = AccessorType<User>;


class UserClass implements AccessorType<User> {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  
  getName(): string {
    return this._name;
  }

  
  setName(value: string): void {
    this._name = value;
  }

  
  getAge(): number {
    return this._age;
  }

  
  setAge(value: number): void {
    this._age = value;
  }
}
