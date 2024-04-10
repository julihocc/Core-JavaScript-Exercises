"use strict";
class UserClass {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }
    getAge() {
        return this._age;
    }
    setAge(value) {
        this._age = value;
    }
}
