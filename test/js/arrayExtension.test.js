require('../../src/js/arrayExtension.esm')
const test = require('@jest/globals').test
const expect = require('@jest/globals').expect

let array = [4, 5, 6, 7, 8, 9, 1, 2, 3, 10, 11, 22]
test("Индекс максимального элемента находится", () => {
    expect(array.maxIndex()).toBe(11)
})
test("Максимальный элемент находится", () => {
    expect(array.max()).toBe(22)
})
test("Индекс минимального элемента находится", () => {
    expect(array.minIndex()).toBe(6)
})
test("Минимальный находится", () => {
    expect(array.min()).toBe(1)
})
test("Минимальный находится", () => {
    array = [6, 6, 6]
    expect(array.min()).toBe(6)
    expect(array.max()).toBe(6)
    expect(array.minIndex()).toBe(0)
    expect(array.maxIndex()).toBe(0)
})
test("getUnique: Выборка уникального набора", () => {
    expect([1, 4, 5, 5, 5, 7].getUnique()).toStrictEqual([1, 4, 5, 7])
})
test("getUnique: Оставляет строки не тронутыми считая их числами", () => {
    expect([1, "4", 5, 5, 5, 7].getUnique()).toStrictEqual([1, "4", 5, 7])
})
test("getUnique: Строки это не числа", () => {
    expect([1, 4, "5", 5, 5, 7].getUnique()).toStrictEqual([1, 4, "5", 5, 7])
})
test("getUnique: Очищает null, undefined и \"\"", () => {
    expect([1, 4, null, null, 5, 5, 7].getUnique()).toStrictEqual([1, 4, 5, 7])
    expect([1, 4, undefined, undefined, 5, 5, 7].getUnique()).toStrictEqual([1, 4, 5, 7])
})
test("getUnique: Concat test", () => {
    expect([].concat([5, 4]).concat([5]).concat([4, 3]).concat([1]).getUnique()).toStrictEqual([5, 4, 3, 1])
    expect([1, 4, undefined, undefined, 5, 5, 7].getUnique()).toStrictEqual([1, 4, 5, 7])
})
test("getFrequentlySorted: Frequency sorted", () => {
    expect([].concat([5, 5, 4, 4, 4, 4, 4, 3, 2]).getFrequentlySorted()).toStrictEqual([4, 5, 3, 2])
    expect([].concat([5, 5, 5, 5, 5, 5, 4, 3, 2]).getFrequentlySorted()).toStrictEqual([5, 4, 3, 2])
    expect([].concat([5, 5, 5, 4, 4, 4, 7, 3, 2]).getFrequentlySorted()).toStrictEqual([5, 4, 7, 3, 2])
    expect([].concat([1, 2, 3, 7, 8, 9]).getFrequentlySorted()).toStrictEqual([9, 8, 7, 3, 2, 1])
})
test("getFrequentlySorted: Frequency sorted Must sort singles by value", () => {
    expect([].concat([5, 4, 3, 3, 3, 3, 3, 3, 2, 1, 6, 6, 6]).getFrequentlySorted()).toStrictEqual([3, 6, 5, 4, 2, 1])
    expect([].concat([5, 4, 3, 3, 3, 2, 1, 6, 6, 6]).getFrequentlySorted()).toStrictEqual([6, 3, 5, 4, 2, 1])
})
test("count: count element in array", () => {
    expect([].concat([5, 2]).count(2)).toBe(1)
    expect([].concat([5, 2, 2, 2, 2, 2]).count(2)).toBe(5)
    expect([].concat([5, 2, 2, 2, 2, 2]).count(5)).toBe(1)
    expect([].concat([5, 2, 2, 3, 3]).count(3)).toBe(2)
    expect([].concat([5, undefined, null, 2, 2, 2]).count(5)).toBe(1)
    expect([].concat([5, undefined, null, 2, 2, 2]).count(2)).toBe(3)
    expect([].concat([5, undefined, null, 2, 2, 2]).count(undefined)).toBe(1)
    expect([].concat([5, undefined, null, 2, 2, 2]).count(null)).toBe(1)
})