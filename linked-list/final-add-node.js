function solution(head, target) {
  if (!head) {
    console.log('cant be here');
    head = new ListNode(target);

    return head;
  }

  let current = head;

  while (current) {
    if (current.next === null) {
      current.next = new ListNode(target);
      break;
    }

    current = current.next;
  }

  return head;
}
