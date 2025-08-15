// Given a linked list of integers, swap adjacent pairs.

function solution(head) {
  if (!head || !head.next) {
    return head;
  }

  const dummyNode = { next: head };

  let prev = dummyNode;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = prev.next.next;

    if (first && second) {
      prev.next = second;
      first.next = second.next;
      second.next = first;
    }

    prev = first;
  }
}

// Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

// Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

// Example

// For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
// solution(l1, l2) = [1, 2, 3, 4, 5, 6];
// For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
// solution(l1, l2) = [0, 1, 1, 2, 3, 4, 5].

function solution(l1, l2) {
  const dummy = { next: null };
  let current = dummy;

  while (l1 && l2) {
    if (l1.value <= l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}
