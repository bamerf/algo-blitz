function solution(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const reversed_head = solution(head.next);

  console.log(reversed_head);
  console.log(head);

  head.next.next = head;

  head.next = null;

  return reversed_head;
}
