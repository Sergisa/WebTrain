require('../../src/js/array')
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