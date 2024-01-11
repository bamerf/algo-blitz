function hasCycle(head) {
  let seen = new Set();
  let cur = head;

  while (cur) {
    console.log('seen ->', seen);
    if (seen.has(cur)) {
      return true;
    }

    seen.add(cur);
    cur = cur.next;
  }

  return false;
}

hasCycle(cycleHead);

function hasCycle2Ptrs(head) {
  let turtle = head;
  let rabbit = head;

  while (rabbit && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;

    if (turtle == rabbit) return true; // found the cycle
  }

  return false;
}
