import getMinSum from "../utils/get-min-sum";

describe('Function', () => {
  it(`should return -2 for ['-3', '-1', '-1']`, () => {
    expect(getMinSum(`-3, -1, -1`)).toEqual(-4);
  });
  it(`should return Массив не содержит чисел for []`, () => {
    expect(getMinSum(``)).toEqual('Массив не содержит чисел');
  });
  it(`should return Массив не содержит чисел for ['a', 'b']`, () => {
    expect(getMinSum(`a, b`)).toEqual('Массив не содержит чисел');
  });
  it(`should return В массиве только одно число for ['1', 'b']`, () => {
    expect(getMinSum(`1, b`)).toEqual('В массиве только одно число');
  });
  it(`should return 3 for ['1', '2', 'b']`, () => {
    expect(getMinSum(`1, 2, b`)).toEqual(3);
  });
});