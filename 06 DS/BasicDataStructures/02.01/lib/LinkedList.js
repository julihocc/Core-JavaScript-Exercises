class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    head;
    tail;
    #length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.#length = 0;
    }
    append(value) {
        this.#length++;
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return this;
    }
    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
    split() {
        let slow = this.head;
        let fast = this.head;
        let first = new LinkedList();
        while (fast && fast.next) {
            first.append(slow.value); // Non-null assertion because slow starts from head, which is not null unless the list is empty
            slow = slow.next; // Non-null assertion for the same reason
            fast = fast.next.next;
        }
        let second = new LinkedList();
        while (slow) {
            second.append(slow.value);
            slow = slow.next;
        }
        return [first, second];
    }
    halve() {
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next; // Non-null assertion because slow follows fast
            fast = fast.next.next;
        }
        const second = new LinkedList();
        second.head = slow;
        second.tail = this.tail;
        this.tail = prev;
        if (this.tail) {
            this.tail.next = null;
        }
        second.#length = Math.ceil(this.#length / 2);
        this.#length = Math.floor(this.#length / 2);
        return second;
    }
    get length() {
        return this.#length;
    }
    set length(value) {
        this.#length = value;
    }
    lookup(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    insertAfter(value, ...newValues) {
        let current = this.lookup(value);
        if (!current) {
            return this;
        }
        let next = current.next;
        newValues.forEach((value) => {
            this.#length++;
            const newNode = new Node(value);
            current.next = newNode; // Non-null assertion because current has been found
            current = newNode;
        });
        current.next = next;
        return this;
    }
    findByPosition(position) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (index === position) {
                return current;
            }
            index++;
            current = current.next;
        }
        return null;
    }
    insertAtPosition(position, ...newValues) {
        if (position === 0) {
            newValues.reverse().forEach((value) => {
                const newNode = new Node(value);
                newNode.next = this.head;
                this.head = newNode;
                if (!this.tail) {
                    this.tail = newNode;
                }
                this.#length++;
            });
            return this;
        }
        let current = this.findByPosition(position - 1);
        if (!current) {
            return this;
        }
        let next = current.next;
        newValues.forEach((value) => {
            this.#length++;
            const newNode = new Node(value);
            current.next = newNode; // Non-null assertion because current has been found
            current = newNode;
        });
        current.next = next;
        if (!next) {
            this.tail = current;
        }
        return this;
    }
    filter(callback) {
        let current = this.head;
        const newList = new LinkedList();
        while (current) {
            if (callback(current.value)) {
                newList.append(current.value);
            }
            current = current.next;
        }
        return newList;
    }
}
export { LinkedList, Node };
