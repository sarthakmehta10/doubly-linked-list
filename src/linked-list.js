const Node = require('./node');

class LinkedList {
    constructor(length) {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const node = new Node();
        node.prototype = function(data) {
        if (this.length == 0) {
            this._head = node.next;
            this._tail = node.prev;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
        }
    }

    head() {
        if (this.length > 0) {
          return this._head;
      } else {
          throw new Error("List is empty.");
      }
    }

    tail() {
        if (this.length > 0) {
          return this._tail;
      } else {
           throw new Error("List is empty.");
      }
    }

    at(index) {
        return this._at(index).data;
    }

    insertAt(index, data) {
        if (index < this.length) {
            var node = {
                data: data,
                next: null,
                prev: null,
            }

            var nodeCur = this._at(index);
            var nodePrev = nodeCur.prev;
            var nodeNext = nodeCur.next;

            node.prev = nodePrev;
            node.next = nodeNext;
            nodePrev.next = node;
            nodeNext.prev = node;

            this.length++;

            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {
        if (index < this.length) {

            var node = this._head;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }
    }

    reverse() {
        var node_buf = {
            data: null,
            next: null,
            prev: null,
        }

        var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            node_buf.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node_buf.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }

        return this;
    }

    indexOf(data) {
         var node = this._head;
        var i = 0;
        while (i != this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        throw new Error("Data " + data + " is not found.");
    }

}

module.exports = LinkedList;
