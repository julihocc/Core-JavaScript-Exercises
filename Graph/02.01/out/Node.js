export default class Node {
    value;
    id;
    constructor(value) {
        this.value = value;
        this.id = Symbol();
    }
}
