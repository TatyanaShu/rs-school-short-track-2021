/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function ListNode(x) {
  this.value = x;
  this.next = null;
}
function removeKFromList (l, k) {
  for (let i = 0; i < l.length; i++) {
    if (l[i] === k) {
      l.splice(i, 1);
    }
  }
  // class LinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.length = 0;
  //   }
  // }
  // function add(value) {
  //   if (this.length === 0) {
  //     this.head = new ListNode(value);
  //   } else {
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     current.next = new LinkedList(value);
  //   }
  //   this.length++;
  // }
  return ListNode(l);
}

module.exports = removeKFromList;
