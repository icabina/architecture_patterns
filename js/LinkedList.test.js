import { LinkedList, LinkedListNode } from "./LinkedList";

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});
//=====================================================
describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      //we want to return null if we pass an index that doesnt exist inside of it
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("if index is greater than length of list", () => {
    test("it return null", () => {
      //we want to return null if we pass an index that doesnt exist inside of it
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    test("it should always return the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("it returns the element at the index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});
//=====================================================
describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("it does not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);
      expect(ll.length).toBe(2);
    });
  });
  describe("if index is greater than length of list", () => {
    test("it does not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);
      expect(ll.length).toBe(2);
    });
  });

  describe("with index 0", () => {
    test("it should insert at the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("with index in the middle", () => {
    test("it should insert", () => {
      const ll = LinkedList.fromValues(10, 20, 40, 60);
      ll.insertAtIndex(2, 30);
      const node = ll.getByIndex(2);
      expect(node.value).toBe(30);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(5);
    });
  });
});
