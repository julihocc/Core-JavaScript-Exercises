class DoublyLinkedListNode {
    value;
    next = null;
    prev = null;
    constructor(value) {
        this.value = value;
    }
}
export default class DoublyLinkedList {
    head = null;
    tail = null;
    append(value) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    prepend(value) {
        const newNode = new DoublyLinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
    remove(value) {
        if (!this.head)
            return;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.prev)
                    current.prev.next = current.next;
                if (current.next)
                    current.next.prev = current.prev;
                if (current === this.head)
                    this.head = current.next;
                if (current === this.tail)
                    this.tail = current.prev;
                return;
            }
            current = current.next;
        }
    }
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}
