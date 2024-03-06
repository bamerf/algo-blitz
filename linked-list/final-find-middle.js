function solution(list) {
  let slow = list;
  let fast = list;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}
