// import re

// class ListNode:
//     def __init__(self, value = 0, next = None):
//         self.value = value
//         self.next = next

// def arrayify(head):
//     array = []
//     ptr = head
//     while ptr != None:
//         array.append(ptr.value)
//         ptr = ptr.next
//     return array

// #--------- PROBLEM 1 -----------
// # Q. Given an unsorted linked list, find the element with the largest value.

// # Examples:
// # • Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
// # • Given a linked list: 1  // returns 1
// # ASK
// # [] -> -1

// # Plan
// # tmlLargest when we see item larger we update tmp

// def findMax(node: ListNode) -> int:
//     tmp_lrgest = None

//     while node is not None:
//         if tmp_lrgest is None:
//             tmp_lrgest = node.value

//         if node.value > tmp_lrgest:
//             tmp_lrgest = node.value

//         node = node.next

//     return tmp_lrgest

// # Test Cases
// LL1 = ListNode(1, ListNode(4, ListNode(5, ListNode(1))))
// LL2 = ListNode(7, ListNode(1, ListNode(5, ListNode(1))))
// LL3 = ListNode(-1, ListNode(-3, ListNode(-5, ListNode(0, ListNode(-11)))))
// # print(findMax(LL1)) # 5
// # print(findMax(LL2)) # 7
// # print(findMax(LL3)) # 0
// # print(findMax(ListNode(1))) # 1

// #--------- PROBLEM 2 -----------
// # Q. Reverse a given linked list.

// # Examples:
// # • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
// # • Given a linked list: 1 // returns 1

// # Ask
//     # [] -> []

// # Plan
//     # recursively walk the LL and on the way up append items from the back of the list to the front of the new list

// def reverse(head: ListNode) -> ListNode:
//     tmp = []

//     if head.next is not None:
//       head.next =  reverse(head.next)

//     tmp.append(head.value)
//     print('up', head.value)

//     return head

// # Test Cases
// LL1 = ListNode(13, ListNode(1, ListNode(5, ListNode(3, ListNode(7, ListNode(10))))))
// print(arrayify(reverse(ListNode(1)))) # [1]
// print(arrayify(reverse(ListNode(1, ListNode(2))))) # [2, 1]
// print(arrayify(reverse(LL1))) # [10, 7, 3, 5, 1, 13]
// # print(reverse(None)) # None

// #--------- PROBLEM 3 -----------
// # Q. Given a linked list, return the kth element from the end of the list.
// #    If the k exceeds the length of the list, return -1.

// # Examples:
// # • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
// # • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1

// def kthFromLast(head: ListNode, k: int) -> int:
//     # Write your code here.
//     pass

// # Test Cases
// LL1 = ListNode(13, ListNode(1, ListNode(5, ListNode(3, ListNode(7, ListNode(10))))))
// # print(kthFromLast(LL1, 1)) # 10
// # print(kthFromLast(LL1, 3)) # 3
// # print(kthFromLast(LL1, 6)) # 13
// # print(kthFromLast(LL1, 7)) # -1
// # print(kthFromLast(None, 7)) # None
