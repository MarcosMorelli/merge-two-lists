const assert = require('assert').strict;
const { describe, it} = require('mocha')

const { ListNode, mergeTwoLists } = require('./merge-two-lists')

describe('Tests for mergeTwoLists', () => {
    it ('Should merge two populated lists', () => {
        const list1 = createLinkedList([2, 4, 6])
        const list2 = createLinkedList([1, 3, 5])

        const result = mergeTwoLists(list1, list2)

        const expected = '{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":{"val":6,"next":null}}}}}}'
        assert.strictEqual(JSON.stringify(result), expected)
    })

    it ('Should merge different sizes lists', () => {
        const list1 = createLinkedList([2])
        const list2 = createLinkedList([1, 3, 5])

        const result = mergeTwoLists(list1, list2)

        const expected = '{"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":5,"next":null}}}}'
        assert.strictEqual(JSON.stringify(result), expected)
    })

    it ('Should return list one if list two is empty', () => {
        const list1 = createLinkedList([2, 4, 6])

        const result = mergeTwoLists(list1, null)

        const expected = '{"val":2,"next":{"val":4,"next":{"val":6,"next":null}}}'
        assert.strictEqual(JSON.stringify(result), expected)
    })

    it ('Should return list two if list one is empty', () => {
        const list2 = createLinkedList([2, 4, 6])

        const result = mergeTwoLists(null, list2)

        const expected = '{"val":2,"next":{"val":4,"next":{"val":6,"next":null}}}'
        assert.strictEqual(JSON.stringify(result), expected)
    })

    it ('Should return null if both lists are empty', () => {
        const result = mergeTwoLists(null, null)
        
        assert.ifError(result)
    })
})

function createLinkedList (arrayOfElements) {
    const firstNode = new ListNode(arrayOfElements[0])
    let current = firstNode

    for (let i = 1; i < arrayOfElements.length; i++) {
        current.next = new ListNode(arrayOfElements[i])
        current = current.next
    }

    return firstNode
}