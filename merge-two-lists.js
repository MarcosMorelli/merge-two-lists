/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
    const mergedList = new ListNode(-1)
    let head = mergedList

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            head.next = new ListNode(l2.val)
            l2 = l2.next
        }
        head = head.next
    }

    head.next = l1 || l2

    return mergedList.next
};

module.exports = {
    ListNode,
    mergeTwoLists
}